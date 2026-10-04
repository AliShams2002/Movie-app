import { motion } from "framer-motion";
import { CalendarDays, Edit3, LogOut, Mail } from "lucide-react";
import { formatDateHelper } from "../../utils/dateHelpers";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const ProfileHeader = ({ user, useAuthStore }) => {
  const fileInputRef = useRef(null);
  const updateAvatar = useAuthStore((s) => s.updateUserAvatar);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validation
    if (!file.type.startsWith("image/")) {
      toast.error("فقط فایل تصویری مجاز است");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("حجم عکس باید کمتر از ۵ مگابایت باشد");
      return;
    }

    setIsUploading(true);
    const result = await updateAvatar(file);
    setIsUploading(false);

    if (result.success) {
      toast.success("عکس پروفایل به‌روزرسانی شد");
    } else {
      toast.error("خطا در آپلود عکس");
    }
  };
  return (
    <div className="relative">
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img
          src="/images/Auth_Wallpaper.jpg"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 relative -mt-24 md:-mt-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-end gap-6"
        >
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-red-500 via-red-600 to-orange-500 shadow-2xl shadow-red-600/30">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-full h-full object-cover rounded-full border-4 border-[#0a0a0a]"
              />
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 p-2 rounded-full border-2 border-[#0a0a0a] transition-colors hidden"
              title="Cgange avatar"
            />
            {/* <button
              className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 p-2 rounded-full border-2 border-[#0a0a0a] transition-colors"
              title="Cgange avatar"
            >
              <Edit3 className="w-4 h-4 text-white" />
            </button> */}
          </div>

          {/* User Details */}
          <div className="flex-1 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {user.displayName}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" /> {user.email}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" /> Join in{" "}
                {formatDateHelper(user.metadata.creationTime)}
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <div className="pb-4">
            <button
              onClick={() => useAuthStore.getState().logout()}
              className="flex items-center gap-2 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 text-red-400 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileHeader;
