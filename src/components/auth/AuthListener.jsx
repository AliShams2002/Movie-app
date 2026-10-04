import { onAuthStateChanged } from "firebase/auth";
import { createUserDoc } from "../../services/userService";
import useAuthStore from "../../store/useAuthStore";
import { useUserDataStore } from "../../store/useUserDataStore";
import { useEffect } from "react";
import { auth } from "../../services/firebase";

export default function AuthListener({ children }) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        useAuthStore.getState().setUser(user);
        await createUserDoc(user); // ← Firestore doc
        await useUserDataStore.getState().loadUserData(user.uid);
      } else {
        useAuthStore.getState().setUser(null);
        useUserDataStore.getState().reset();
      }
    });
    return () => unsubscribe();
  }, []);
  return children;
}
