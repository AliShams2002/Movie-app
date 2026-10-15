import { motion } from "framer-motion";
import { CalendarDays, Edit3, LogOut, Mail } from "lucide-react";
import { formatDateHelper } from "../../utils/dateHelpers";
import Button from "../common/Button";

const ProfileHeader = ({ user, useAuthStore }) => {
  // get and format image to base64
  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const render = new FileReader();

    render.onloadend = async () => {
      const base64 = render.result;
      await useAuthStore.getState().updateUserAvatar(base64);
    };

    render.readAsDataURL(file);
  };

  return (
    <div className="relative">
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        {/* image */}
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
                src={user.avatar || "/images/UserAvatar.png"}
                alt={user.displayName}
                className="w-full h-full object-cover rounded-full border-4 border-[#0a0a0a]"
                onError={(e) => {
                  e.currentTarget.src = "/images/UserAvatar.png";
                }}
              />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="absolute bottom-1 w-full h-full bg-red-600 hover:bg-red-700 p-2 rounded-full border-2 border-[#0a0a0a] transition-colors cursor-pointer z-30 opacity-0"
              title="Cgange avatar"
            />
            <button
              className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 p-2 rounded-full border-2 border-[#0a0a0a] transition-colors"
              title="Cgange avatar"
            >
              <Edit3 className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* User Details */}
          <div className="flex-1 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {user.username}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4" /> {user.email}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" /> Join in{" "}
                {formatDateHelper(user.createdAt.toDate())}
              </span>
            </div>
          </div>

          {/* Logout Button */}
          <div className="pb-4">
            <Button
              type="button"
              action={() => useAuthStore.getState().logout()}
              className="flex items-center gap-2 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 text-red-400 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              icon={<LogOut className="w-4 h-4" />}
              title="Logout"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileHeader;
