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
import { auth, db } from "../services/firebase";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";

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
      await updateProfile(user, { displayName: name });
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
      // ۳. آپدیت Firestore
      const docRef = doc(db, "users", user.uid);

      await updateDoc(docRef, { avatar: file });

      // ۴. آپدیت state
      set({ user: { ...user, avatar: file } });

      toast.success("Successful changed");
      return { success: true, url: file };
    } catch (error) {
      toast.error("Error in changing");
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
