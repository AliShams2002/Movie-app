import {
  deleteField,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export const createUserDoc = async (user) => {
  const docRef = doc(db, "users", user.uid);
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    // New user
    await setDoc(docRef, {
      username: user.displayName || "_",
      avatar: user.photoURL || null,
      email: user.email,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
      favorites: {},
      watchlist: {},
    });
  } else {
    // Old user
    await updateDoc(docRef, {
      lastLogin: serverTimestamp(),
    });
  }
};

// Get user watchlist & favorites
export const getUserData = async (uid) => {
  const docRef = doc(db, "users", uid);
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    return {
      watchlist: {},
      favorites: {},
    };
  }

  const data = snap.data();
  return {
    watchlist: data.watchlist || {},
    favorites: data.favorites || {},
  };
};

// Get user progile
export const getUserProfile = async (uid) => {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
};

// Add to watchlist
export const addToWatchList = async (uid, media) => {
  await updateDoc(doc(db, "users", uid), {
    [`watchlist.${media.id}`]: {
      id: media.id,
      mediaType: media.mediaType,
      title: media.title || media.name,
      posterPath: media.posterPath,
      voteAverage: media.voteAverage,
      releaseDate: media.releaseDate,
      addedAt: serverTimestamp(),
    },
  });
};

// Remove of watchlist
export const removeFromWatchList = async (uid, mediaId) => {
  await updateDoc(doc(db, "users", uid), {
    [`watchlist.${mediaId}`]: deleteField(),
  });
};

// Add to favorites
export const addToFavorites = async (uid, media) => {
  await updateDoc(doc(db, "users", uid), {
    [`favorites.${media.id}`]: {
      id: media.id,
      mediaType: media.mediaType,
      title: media.title || media.name,
      posterPath: media.poster_path,
      voteAverage: media.vote_average,
      releaseDate: media.release_date || media.first_air_date,
      addedAt: serverTimestamp(),
    },
  });
};

// Remove of favorites
export const removeFromFavorites = async (uid, mediaId) => {
  await updateDoc(doc(db, "users", uid), {
    [`favorites.${mediaId}`]: deleteField(),
  });
};
