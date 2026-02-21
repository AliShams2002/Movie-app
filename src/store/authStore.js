import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  profile: null,
  loading: true,

  setUser: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),
  setLoading: (loading) => set({ loading }),

  logoutState: () =>
    set({
      user: null,
      profile: null,
    }),
}));

export default useAuthStore;
