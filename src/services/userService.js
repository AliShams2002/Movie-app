import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

// افزودن به لیست علاقه مندی ها
export const addToFavorite = async (uid, movieId) => {
  await updateDoc(doc(db, "users", uid), {
    favorite: arrayUnion(movieId),
  });
};

// افزودن به لیست پخش
export const addToWatchList = async (uid, movieId) => {
  await updateDoc(doc(db, "users", uid), {
    watchlist: arrayUnion(movieId),
  });
};

// آپلود و ذخیره آواتار
export const updateAvatar = async (uid, base64Image) => {
  await updateDoc(doc(db, "users", uid), {
    avatar: base64Image,
  });
};
