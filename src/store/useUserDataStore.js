import { create } from "zustand";
import {
  addToFavorites,
  addToWatchList,
  getUserData,
  removeFromFavorites,
  removeFromWatchList,
} from "../services/userService";

export const useUserDataStore = create((set, get) => ({
  watchlist: {},
  favorites: {},
  isLoading: true,
  error: null,

  // Loads the user's watchlist and favorites from Firestore
  loadUserData: async (uid) => {
    set({ isLoading: true, error: null });
    try {
      const { watchlist, favorites } = await getUserData(uid);
      set({ watchlist, favorites, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  // Toggles a media item in the watchlist with optimistic update
  toggleWatchlis: async (uid, media) => {
    const { watchlist } = get();
    const exists = !!watchlist[media.id];
    const previous = watchlist;

    // Optimistically update local state before server response
    const next = { ...watchlist };
    if (exists) {
      delete next[media.id];
    } else {
      next[media.id] = { ...media, addedAt: Date.now() };
    }
    set({ watchlist: next });

    try {
      if (exists) await removeFromWatchList(uid, media.id);
      else await addToWatchList(uid, media);
      return { success: true };
    } catch (error) {
      set({ watchlist: previous, error: error.message });
      return { success: false, error: error.message };
    }
  },

  // Toggles a media item in favorites with optimistic update
  toggleFavorites: async (uid, media) => {
    const { favorites } = get();
    const exists = !!favorites[media.id];
    const previous = favorites;

    // Optimistically update local state before server response
    const next = { ...favorites };
    if (exists) {
      delete next[media.id];
    } else {
      next[media.id] = { ...media, addedAt: Date.now() };
    }

    set({ favorites: next });

    try {
      if (exists) await removeFromFavorites(uid, media.id);
      else await addToFavorites(uid, media);
      return { success: true };
    } catch (error) {
      set({ favorites: previous, error: error.message });
      return { success: false, error: error.message };
    }
  },

  // Clears all user data (used on logout)
  reset: () =>
    set({ watchlist: {}, favorites: {}, isLoading: false, error: null }),
}));
