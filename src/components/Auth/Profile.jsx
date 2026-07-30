import { BsPlayCircleFill } from "react-icons/bs";
import { updateAvatar } from "../../services/userService";
import { Link } from "react-router-dom";
import { MovieSilder, MovieSlider2 } from "../common/Swiper";
import { SwiperSlide } from "swiper/react";
import MovieCard from "../common/MovieCard";
import { getPopularMovies } from "../../services/movieService";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Profile({ logout, user, profile, setProfile }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getPopularMovies();
        setMovies(response.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
  }, []);

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
    <div className="w-full bg-[#141414] text-white min-h-screen font-iranSans-bold">
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
      <div className="max-w-7xl w-full mx-auto px-6 py-10">
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
              src={profile?.avatar ? profile.avatar : "/images/UserAvatar.png"}
              alt="Channel"
              className="w-28 h-28 bg-[#01f868] rounded-full object-cover border-4 border-red-600"
            />
          </label>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{profile?.username}</h1>

            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="text-white">ایمیل:</span> {profile?.email}
              </p>
              <p>
                <span className="text-white">تاریخ عضویت:</span>{" "}
                {profile?.createdAt}
              </p>
            </div>
          </div>
        </div>

        {/* ================= Favorites ================= */}
        <section className="w-full mt-14 text-center">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">لیست علاقه‌مندی‌ها</h2>
          </div>
          {movies.length == 0 ? (
            <span className="font-iranSans-bold text-gray-300">
              لیست علاقه مندی ها خالی است!
            </span>
          ) : (
            <MovieSilder slidesPerViewPc={6}>
              {movies.map((item) => (
                <SwiperSlide
                  key={item}
                  className="group bg-[#1f1f1f] rounded-2xl overflow-hidden transition duration-300 hover:scale-[1.03]"
                >
                  <MovieCard
                    data={item}
                    type="movie"
                    itemVariants={itemVariants}
                  />
                </SwiperSlide>
              ))}
            </MovieSilder>
          )}
        </section>

        {/* ================= Watchlist ================= */}
        <section className="w-full mt-14 pb-14 text-center">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">لیست تماشا</h2>
          </div>

          {movies.length == 0 ? (
            <span className="font-iranSans-bold text-gray-300">
              لیست تماشا خالی است!
            </span>
          ) : (
            <MovieSilder slidesPerViewPc={6}>
              {movies.map((item) => (
                <SwiperSlide
                  key={item}
                  className="group bg-[#1f1f1f] rounded-2xl overflow-hidden transition duration-300 hover:scale-[1.03]"
                >
                  <MovieCard data={item} type="movie" />
                </SwiperSlide>
              ))}
            </MovieSilder>
          )}
        </section>
      </div>
    </div>
  );
}
