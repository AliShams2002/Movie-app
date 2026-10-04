import {
  arrayUnion,
  deleteField,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "./firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const storage = getStorage();

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

// export const createUserDoc = async ({ email, password, username }) => {
//   try {
//     const cred = await createUserWithEmailAndPassword(auth, email, password);
//     const user = cred.user;

//     await setDoc(doc(db, "users", user.uid), {
//       profile: {
//         username,
//         avatarURL: null,
//         email: user.email,
//         createdAt: serverTimestamp(),
//       },
//       lastLogin: serverTimestamp(),
//       favorite: {},
//       watchlist: {},
//     });
//     return { success: true, data: user, error: null };
//   } catch (error) {
//     return { success: false, data: null, error: error };
//   }
// };

export const loginUser = async (email, password) => {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);

    await updateDoc(doc(db, "users", cred.user.uid), {
      lastLogin: serverTimestamp(),
    });
    return { success: true, data: cred.user, error: null };
  } catch (error) {
    return { success: false, data: null, error: error };
  }
};

export const loginWithGoogleProvider = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    await handleUserDocument(result.user);
    return { success: true, data: result.user, error: null };
  } catch (error) {
    return { success: false, data: null, error: error };
  }
};

export const loginWithGithubProvider = async () => {
  try {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    await handelUserDocument(result.user);
    return { success: true, data: result.user, error: null };
  } catch (error) {
    return { success: false, data: null, error: error };
  }
};

// Add to watchlist
export const addToWatchList = async (uid, media) => {
  await updateDoc(doc(db, "users", uid), {
    [`watchlist.${media.id}`]: {
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

// آپلود و ذخیره آواتار
export const uploadAvatar = async (uid, file) => {
  // await updateDoc(doc(db, "users", uid), {
  //   avatar: base64Image,
  // });
  const filePath = `avatars/${uid}/${Date.now()}-${file.name}`;
  const storageRef = ref(storage, filePath);

  // آپلود
  await uploadBytes(storageRef, file);

  // دریافت URL
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};
