import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Bookmark,
  CalendarDays,
  Mail,
  LogOut,
  Edit3,
  Play,
  Star,
  Trash2,
  Clapperboard,
} from "lucide-react";
import useAuthStore from "../../store/useAuthStore";
import { useUserDataStore } from "../../store/useUserDataStore";
import Spinner from "../../components/common/Spinner";
import ErrorState from "../../components/common/ErrorState";
import { formatDateHelper } from "../../utils/dateHelpers";
import ProfileHeader from "../../components/account/ProfileHeader";
import AccountTabs from "../../components/account/AccountTabs";
import StateCards from "../../components/account/StateCards";
import MediaGrid from "../../components/account/MediaGrid";

// --- داده‌های نمونه (استاتیک) ---
const mockUser = {
  displayName: "علی رضایی",
  email: "ali.rezaei@example.com",
  photoURL:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80",
  joinedDate: "1402/05/12",
};

const mockWatchlist = [
  {
    id: 1,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=500&q=80",
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    img: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=500&q=80",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
  },
  {
    id: 4,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&q=80",
  },
  {
    id: 5,
    title: "Dune: Part Two",
    year: 2024,
    rating: 8.9,
    img: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&q=80",
  },
  {
    id: 6,
    title: "Oppenheimer",
    year: 2023,
    rating: 8.6,
    img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&q=80",
  },
];

const mockLikes = [
  {
    id: 7,
    title: "Arcane",
    year: 2021,
    rating: 9.0,
    img: "https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?w=500&q=80",
  },
  {
    id: 8,
    title: "Breaking Bad",
    year: 2008,
    rating: 9.5,
    img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&q=80",
  },
  {
    id: 9,
    title: "Stranger Things",
    year: 2016,
    rating: 8.7,
    img: "https://images.unsplash.com/photo-1620974286656-83f38c1cefc2?w=500&q=80",
  },
  {
    id: 10,
    title: "The Witcher",
    year: 2019,
    rating: 8.2,
    img: "https://images.unsplash.com/photo-1514539079130-25950c84d65d?w=500&q=80",
  },
];

// --- انیمیشن‌های Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// --- کامپوننت کارت محتوا ---
const ProfileMovieCard = ({ item }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative cursor-pointer rounded-xl overflow-hidden aspect-[2/3] bg-gray-800 border border-white/5 hover:border-red-500/50 transition-colors shadow-lg"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Rating */}
      <div className="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-yellow-400 border border-yellow-400/20 flex items-center gap-1">
        <Star className="w-2.5 h-2.5 fill-current" /> {item.rating}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
        <h3 className="font-bold text-xs truncate text-white mb-1">
          {item.title}
        </h3>
        <p className="text-[10px] text-gray-400 mb-2">{item.year}</p>
        <div className="flex gap-1.5">
          <button className="flex-1 bg-red-600/90 hover:bg-red-600 py-1.5 rounded-lg text-[10px] font-bold text-white transition-colors flex items-center justify-center gap-1">
            <Play className="w-2.5 h-2.5 fill-current" /> تماشا
          </button>
          <button
            className="p-1.5 bg-white/10 hover:bg-red-500/30 border border-white/10 rounded-lg text-gray-300 hover:text-red-400 transition-colors"
            title="حذف از لیست"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Permanent Info */}
      <div className="absolute bottom-2 left-2 right-2 z-10 flex justify-between items-end">
        <h3 className="font-bold text-[10px] truncate max-w-[70%] text-white drop-shadow-md">
          {item.title}
        </h3>
        <span className="bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded text-[9px] text-gray-300 border border-white/10">
          {item.year}
        </span>
      </div>
    </motion.div>
  );
};

// --- کامپوننت اصلی صفحه پروفایل ---
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
