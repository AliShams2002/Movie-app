import { onAuthStateChanged } from "firebase/auth";
import { createUserDoc, getUserProfile } from "../../services/userService";
import useAuthStore from "../../store/useAuthStore";
import { useUserDataStore } from "../../store/useUserDataStore";
import { useEffect } from "react";
import { auth } from "../../services/firebase";

export default function AuthListener({ children }) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Get user profile from firestore
        const userProfile = await getUserProfile(user.uid);
        useAuthStore.getState().setUser({ ...userProfile, uid: user.uid });
        await createUserDoc(user);
        await useUserDataStore.getState().loadUserData(user.uid);
      } else {
        // Reset userdata & userdata store
        useAuthStore.getState().setUser(null);
        useUserDataStore.getState().reset();
      }
    });
    return () => unsubscribe();
  }, []);
  return children;
}
