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

  // Email/password login
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

  // Email/password registration with display name
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

  // Google OAuth login
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

  // GitHub OAuth login
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

  // Updates the user's avatar in Firestore and local state
  updateUserAvatar: async (file) => {
    const user = get().user;
    if (!user) return;

    try {
      // Update Firestore user document
      const docRef = doc(db, "users", user.uid);

      await updateDoc(docRef, { avatar: file });

      // Update local state
      set({ user: { ...user, avatar: file } });

      toast.success("Successful changed");
      return { success: true, url: file };
    } catch (error) {
      toast.error("Error in changing");
      console.error("Avatar upload failed:", error);
      return { success: false, error: error.message };
    }
  },

  // Signs the user out
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
