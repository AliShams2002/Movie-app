import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase";
import toast from "react-hot-toast";
import { toPersianDate } from "../utils/dateUtils";

const handelUserDocument = async (user) => {
  const docRef = doc(db, "users", user.uid);
  const snap = await getDoc(docRef);

  if (!snap.exists()) {
    //  کاربر جدید
    await setDoc(docRef, {
      username: user.displayName || "_",
      avatar: user.photoURL || null,
      email: user.email,
      createdAt: toPersianDate(+user.reloadUserInfo.createdAt),
      lastLogin: toPersianDate(+user.reloadUserInfo.lastLoginAt),
      favorite: [],
      watchlist: [],
    });
  } else {
    // کاربر قدیمی
    await updateDoc(docRef, {
      lastLogin: serverTimestamp(),
    });
  }
};

// ثبت‌نام
export const registerUser = async (email, password, username) => {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    const user = cred.user;

    await setDoc(doc(db, "users", user.uid), {
      username,
      avatar: null,
      email: user.email,
      createdAt: toPersianDate(+user.reloadUserInfo.createdAt),
      lastLogin: toPersianDate(+user.reloadUserInfo.lastLoginAt),
      favorite: [],
      watchlist: [],
    });
    toast.success("عملیات ثبت نام با موفقیت انجام شد!");
    return user;
  } catch (error) {
    toast.error("عملیات ثبت نام با مشکل مواجه شد!");
  }
};

// ورود
export const loginUser = async (email, password) => {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);

    await updateDoc(doc(db, "users", cred.user.uid), {
      lastLogin: serverTimestamp(),
    });

    toast.success("عملیات ورود با موفقیت انجام شد!");
    return cred.user;
  } catch (error) {
    toast.error("عملیات ورود با ناموفق بود!");
  }
};

export const loginWithGoogleProvider = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    await handelUserDocument(result.user);
    toast.success("عملیات ورود با موفقیت انجام شد!");
    return result.user;
  } catch (error) {
    toast.error("عملیات ورود با ناموفق بود!");
  }
};
export const loginWithGithubProvider = async () => {
  try {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    await handelUserDocument(result.user);
    toast.success("عملیات ورود با موفقیت انجام شد!");
    return result.user;
  } catch (error) {
    console.log(error);
    toast.error("عملیات ورود با ناموفق بود!");
  }
};

// گرفتن پروفایل
export const getUserProfile = async (uid) => {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
};

// خروج
export const logoutUser = async () => {
  await signOut(auth);
};
