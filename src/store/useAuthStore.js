import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { create } from "zustand";
import { auth } from "../services/firebase";
import toast from "react-hot-toast";
import { updateDoc } from "firebase/firestore";
import { uploadAvatar } from "../services/userService";

const useAuthStore = create((set, get) => ({
  user: null,
  isLoading: true,
  error: null,

  setUser: (user) => set({ user, isLoading: false, error: null }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  login: async (email, password) => {
    set({ error: null });
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login success");
    } catch (error) {
      set({ error: error.code });
      toast.error("Login filed!");
      throw error;
    }
  },

  register: async (name, email, password) => {
    set({ error: null });
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      // await createUserDoc({ ...user, displayName: name });
      toast.success("Register success");
    } catch (error) {
      set({ error: error.code });
      toast.error("Register filed!");
      throw error;
    }
  },

  loginWithGoogle: async () => {
    set({ error: null });
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Register success");
    } catch (error) {
      set({ error: error.code });
      toast.error("Register filed!");
      throw error;
    }
  },

  loginWithGithub: async () => {
    set({ error: null });
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Register success");
    } catch (error) {
      set({ error: error.code });
      toast.error("Register filed!");
      throw error;
    }
  },

  updateUserAvatar: async (file) => {
    const user = get().user;
    if (!user) return;

    try {
      // ۱. آپلود به Storage
      const downloadURL = await uploadAvatar(user.uid, file);

      // ۲. آپدیت Firebase Auth (اختیاری ولی خوبه)
      await updateProfile(user, { photoURL: downloadURL });

      // ۳. آپدیت Firestore
      const docRef = doc(db, "users", user.uid);
      await updateDoc(docRef, { avatar: downloadURL });

      // ۴. آپدیت state
      set({ user: { ...user, photoURL: downloadURL } });

      return { success: true, url: downloadURL };
    } catch (error) {
      console.error("Avatar upload failed:", error);
      return { success: false, error: error.message };
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      toast.success("Logout success");
    } catch (error) {
      set({ error: error.code });
      toast.error("Logout filed!");
      throw error;
    }
  },
}));

export default useAuthStore;
