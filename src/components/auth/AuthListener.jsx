import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../services/firebase";
import { createUserDoc, getUserProfile } from "../../services/userService";

import useAuthStore from "../../store/useAuthStore";
import { useUserDataStore } from "../../store/useUserDataStore";

export default function AuthListener({ children }) {
  useEffect(() => {
    let isMounted = true;
    let eventId = 0;

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      const currentEventId = ++eventId;

      const isCurrentEvent = () => isMounted && currentEventId === eventId;

      useAuthStore.getState().setLoading(true);

      try {
        if (!firebaseUser) {
          if (!isCurrentEvent()) return;

          useAuthStore.getState().setUser(null);
          useUserDataStore.getState().reset();
          return;
        }

        await createUserDoc(firebaseUser);

        const profile = await getUserProfile(firebaseUser.uid);

        if (!isCurrentEvent()) return;

        useAuthStore.getState().setUser({
          ...(profile ?? {}),
          uid: firebaseUser.uid,
        });

        await useUserDataStore.getState().loadUserData(firebaseUser.uid);
      } catch (error) {
        if (!isCurrentEvent()) return;

        console.error("Authentication initialization failed:", error);

        useAuthStore
          .getState()
          .setError(error.message || "Failed to initialize user session.");

        // Do not leave the app in an infinite loading state.
        useAuthStore.getState().setUser(null);
        useUserDataStore.getState().reset();
      } finally {
        if (isCurrentEvent()) {
          useAuthStore.getState().setLoading(false);
        }
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  return children;
}
