import { useEffect } from "react";
import AuthLayout from "../layouts/AuthLayout";
import Profile from "../components/Auth/Profile";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import useAuthStore from "../store/authStore";
import { getUserProfile, logoutUser } from "../services/authService";
import SpinnerLoading from "../components/SpinnerLoading";

const Account = () => {
  const {
    profile,
    user,
    setUser,
    setProfile,
    loading,
    setLoading,
    logoutState,
  } = useAuthStore();

  const handelLogout = async () => {
    logoutState();
    await logoutUser();
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);

        const profile = await getUserProfile(firebaseUser.uid);
        setProfile(profile);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#151522] flex items-center justify-center px-4">
        <h2 className="text-gray-200">
          در حال بارگذاری... <SpinnerLoading width={12} height={12} />
        </h2>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#151522] flex items-center justify-center px-4">
      {profile ? (
        <Profile
          profile={profile}
          user={user}
          setProfile={setProfile}
          logout={handelLogout}
        />
      ) : (
        <AuthLayout />
      )}
    </div>
  );
};

export default Account;
