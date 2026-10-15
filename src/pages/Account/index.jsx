import { useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import { useUserDataStore } from "../../store/useUserDataStore";
import Spinner from "../../components/common/Spinner";
import ErrorState from "../../components/common/ErrorState";
import ProfileHeader from "../../components/account/ProfileHeader";
import AccountTabs from "../../components/account/AccountTabs";
import StateCards from "../../components/account/StateCards";
import MediaGrid from "../../components/account/MediaGrid";

// --- Animations Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Account = () => {
  const { user, isLoading, error } = useAuthStore();
  const {
    favorites,
    watchlist,
    isLoading: dataStoreLoading,
    error: dataStoreError,
  } = useUserDataStore();
  const [activeTab, setActiveTab] = useState("watchlist");

  const currentList = activeTab === "watchlist" ? watchlist : favorites;

  if (isLoading) return <Spinner />;
  if (error) return <ErrorState errorMessage="Data is not avalable!" />;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pb-24">
      {/* --- 1. Profile Header (Cover & Info) --- */}
      <ProfileHeader user={user} useAuthStore={useAuthStore} />

      {/* --- 2. Stats Cards (Watchlist & favorites) --- */}
      <StateCards
        watchlist={watchlist}
        favorites={favorites}
        itemVariants={itemVariants}
      />

      {/* --- 3. Tabs (Watchlist / favorites) --- */}
      <div className="container mx-auto max-w-6xl px-6 mt-12">
        <AccountTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* --- 4. Content Grid --- */}
        <MediaGrid
          activeTab={activeTab}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
          currentList={Object.values(currentList)}
          isLoading={dataStoreLoading}
          error={dataStoreError}
        />
      </div>
    </div>
  );
};

export default Account;
