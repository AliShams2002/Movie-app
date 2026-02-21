import { BsPlayCircleFill } from "react-icons/bs";
import { updateAvatar } from "../../services/userService";
import { Link } from "react-router-dom";

export default function Profile({ logout, user, profile, setProfile }) {
  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const render = new FileReader();

    render.onloadend = async () => {
      const base64 = render.result;
      await updateAvatar(user.uid, base64);
      setProfile({ ...profile, avatar: base64 });
    };

    render.readAsDataURL(file);
  };

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      {/* ================= Top Bar ================= */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/">
            <button className="text-sm text-gray-400 hover:text-white transition">
              ← بازگشت به خانه
            </button>
          </Link>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-sm"
          >
            خروج
          </button>
        </div>
      </div>

      {/* ================= Profile Header ================= */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-[#1f1f1f] rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar */}
          <input
            type="file"
            accept=".jpg,.jpeg"
            id="avatar"
            onChange={handleUpload}
            className="hidden"
          />
          <label htmlFor="avatar">
            <img
              src={profile.avatar ? profile.avatar : "/images/UserAvatar.png"}
              alt="Channel"
              className="w-28 h-28 bg-[#01f868] rounded-full object-cover border-4 border-red-600"
            />
          </label>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{profile.username}</h1>

            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-white">ایمیل:</span> {profile.email}
              </p>
              <p>
                <span className="text-white">تاریخ عضویت:</span>{" "}
                {profile.createdAt}
              </p>
            </div>
          </div>
        </div>

        {/* ================= Favorites ================= */}
        <section className="mt-14">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">لیست علاقه‌مندی‌ها</h2>
          </div>

          <div className="flex items-center gap-5 overflow-hidden">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="max-w-72 w-full bg-[#1f1f1f] rounded-2xl overflow-hidden hover:scale-[1.03] transition group"
              >
                {/* Poster */}
                <div className="relative h-60">
                  <img
                    src='/images/hero.jpg'
                    alt=''
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                    ⭐ 9
                  </div>
                  <div className="absolute left-16 top-28 text-6xl opacity-0 group-hover:opacity-100 text-red-600 transition-all duration-300">
                    <BsPlayCircleFill />
                  </div>
                </div>
                {/* <div className="h-60 bg-gray-800"></div> */}
                <div className="p-3 text-sm">
                  <h3 className="font-semibold truncate">نام فیلم {item}</h3>
                  <p className="text-gray-400 text-xs">2024 • درام</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= Watchlist ================= */}
        <section className="mt-16 pb-20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">لیست تماشا</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="bg-[#1f1f1f] rounded-2xl overflow-hidden hover:scale-[1.03] transition"
              >
                <div className="h-60 bg-gray-800"></div>
                <div className="p-3 text-sm">
                  <h3 className="font-semibold truncate">
                    فیلم در حال تماشا {item}
                  </h3>
                  <p className="text-gray-400 text-xs">2023 • اکشن</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
