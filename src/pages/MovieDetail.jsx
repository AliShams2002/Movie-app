import { AiFillPlaySquare } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import { BsClock, BsPlayCircleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { GiShare } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import useAuthStore from "../store/authStore";
import { addToFavorite, addToWatchList } from "../services/userService";

export default function MovieDetail() {
  const { user } = useAuthStore();

  const handelAddToFavorite = async (movieId) => {
    await addToFavorite(user.uid, movieId);
  };
  const handelAddToWatchList = async (movieId) => {
    await addToWatchList(user.uid, movieId);
  };

  return (
    <div className="bg-[#141414] text-white min-h-screen">
      <div className="h-screen w-full">
        <img
          src="/images/hero.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 lg: gap-8">
        {/* ================= Main Content ================= */}
        <main className="lg:col-span-9 space-y-10">
          {/* Title */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-red-950 px-3 py-1 rounded-lg text-sm flex items-center gap-1 font-iranSans-bold">
                ⭐ 8.9
              </span>
              <span className="text-gray-400 text-sm font-iranSans-edit">
                2024
              </span>
              <span className="text-gray-400 text-sm font-iranSans-edit">
                {" "}
                135 دقیقه
              </span>
            </div>

            <h1 className="text-4xl font-extrabold mb-3 font-iranSans-bold">
              سفر به ناشناخته
            </h1>

            <p className="text-gray-400 max-w-3xl leading-7 font-iranSans-edit">
              ماجراجویی هیجان‌انگیز یک کاوشگر فضایی در سرزمینی مرموز و ناشناخته
              که آینده بشر را تغییر می‌دهد.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                className="bg-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition flex items-center gap-1 font-iranSans-bold"
                onClick={() => handelAddToFavorite("58871")}
              >
                <FaPlus />
                <span>افزودن به لیست</span>
              </button>
              <button
                onClick={() => handelAddToWatchList("34524")}
                className="bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition flex items-center gap-1 font-iranSans-bold"
              >
                <FiHeart />
                <span>علاقه‌مندی</span>
              </button>
              <button className="bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition flex items-center gap-1 font-iranSans-bold">
                <GiShare />
                <span>اشتراک‌گذاری</span>
              </button>
            </div>
          </div>

          {/* About */}
          <section className="bg-[#1f1f1f] rounded-2xl p-6">
            <h2 className="font-iranSans-bold text-lg mb-4">درباره فیلم</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-gray-400">کارگردان</p>
                <p className="font-iranSans-bold">احمد رضایی</p>
              </div>
              <div>
                <p className="text-gray-400">نویسنده</p>
                <p className="font-iranSans-bold">محمد حسینی</p>
              </div>
              <div>
                <p className="text-gray-400">بازیگران</p>
                <p className="font-iranSans-bold">علی محمدی، سارا احمدی</p>
              </div>
              <div>
                <p className="text-gray-400">کشور سازنده</p>
                <p className="font-iranSans-bold">ایران</p>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="bg-[#1f1f1f] rounded-2xl p-6 space-y-6">
            <h2 className="font-iranSans-bold text-lg">نظرات کاربران</h2>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl text-sm space-y-3 py-3 border-b border-gray-800"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    {/* <span className="w-12 h-12 bg-red-600"></span> */}
                    <img
                      src="/images/hero.jpg"
                      alt=""
                      className="w-8 h-8 rounded-full bg-cover"
                    />
                    <div className="flex flex-col">
                      <span className="font-iranSans-bold">کاربر {i}</span>
                      <span className="font-iranSans-edit text-gray-400 text-xs">
                        2روز پیش
                      </span>
                    </div>
                  </div>
                  <span className="text-yellow-400 bg-red-950 py-1 px-2 rounded-lg">
                    ⭐ {8 + i / 2}
                  </span>
                </div>
                <p className="text-gray-400 font-iranSans-bold">
                  فیلم فوق‌العاده‌ای بود، داستان جذاب و بازی‌ها عالی!
                </p>
              </div>
            ))}

            <button className="w-full bg-gray-700 hover:bg-gray-800 transition-all p-2 rounded-lg font-iranSans-bold">
              نوشتن نظر
            </button>
          </section>
        </main>
        {/* ================= Sticky Movie Info ================= */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24 bg-[#1f1f1f] rounded-2xl p-5 text-sm">
            <h3 className="font-bold mb-4 text-lg font-iranSans-bold">
              اطلاعات فیلم
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <MdDateRange size={18} color="red" />
                <div className="flex flex-col">
                  <span>سال تولید</span>
                  <span className="text-white font-iranSans-bold">2024</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <BsClock size={18} color="red" />
                <div className="flex flex-col">
                  <span>مدت زمان</span>
                  <span className="text-white font-iranSans-bold">
                    135 دقیقه
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <AiFillPlaySquare size={18} color="red" />
                <div className="flex flex-col">
                  <span>ژانر</span>
                  <span className="text-white font-iranSans-bold">
                    علمی‌تخیلی، ماجراجویی
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <BiStar size={18} color="red" />
                <div className="flex flex-col">
                  <span>امتیاز</span>
                  <span className="flex items-center gap-1 text-white font-iranSans-bold">
                    8.9 از 10
                  </span>
                </div>
              </li>
            </ul>

            {/* Quality */}
            <div className="mt-4 py-2 border-t border-gray-800">
              <p className="mb-2 text-white font-iranSans-bold">کیفیت موجود</p>
              <div className="flex flex-wrap gap-2">
                {["SD", "HD", "Full HD", "4K"].map((q) => (
                  <span
                    key={q}
                    className="px-3 py-1 rounded-lg bg-[#363636] text-xs font-iranSans-bold"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mt-4 py-2 border-t border-gray-800">
              <p className="mb-2 text-white font-iranSans-bold">زیرنویس</p>
              <div className="flex flex-wrap gap-2">
                {["فارسی", "انگلیسی", "عربی"].map((l) => (
                  <span
                    key={l}
                    className="px-3 py-1 rounded-lg bg-[#363636] text-xs font-iranSans-bold"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div className="w-full pb-20">
        <div id="best" className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-iranSans-bold">فیلم‌های مشابه</h2>
          </div>

          {/* Movie Cards */}
          <div className="flex gap-6">
            {[
              {
                title: "صدای سکوت",
                rate: "8.9",
                year: "2024",
                genre: "درام، معمایی",
                img: "/images/hero.jpg",
              },
              {
                title: "زمان از دست رفته",
                rate: "8.6",
                year: "2024",
                genre: "علمی-تخیلی، درام",
                img: "/images/hero.jpg",
              },
              {
                title: "مرز خطر",
                rate: "8.4",
                year: "2024",
                genre: "اکشن، هیجانی",
                img: "/images/hero.jpg",
              },
              {
                title: "رویای بی‌پایان",
                rate: "8.8",
                year: "2024",
                genre: "فانتزی، درام",
                img: "/images/hero.jpg",
              },
              {
                title: "آخرین امید",
                rate: "8.5",
                year: "2024",
                genre: "اکشن، درام",
                img: "/images/hero.jpg",
              },
              {
                title: "سایه‌های شب",
                rate: "8.7",
                year: "2024",
                genre: "جنایی، تریلر",
                img: "/images/hero.jpg",
              },
            ].map((movie, index) => (
              <div
                key={index}
                className="min-w-[180px] bg-[#1f1f1f] rounded-2xl group hover:scale-110 transition-all duration-300 overflow-hidden"
              >
                {/* Poster */}
                <div className="relative h-64">
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                    ⭐ {movie.rate}
                  </div>
                  <div className="absolute left-16 top-28 text-6xl opacity-0 group-hover:opacity-100 text-red-600 transition-all duration-300">
                    <BsPlayCircleFill />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-sm">
                  <h3 className="font-bold mb-1">{movie.title}</h3>
                  <p className="text-gray-400 text-xs mb-1">{movie.year}</p>
                  <p className="text-gray-400 text-xs">{movie.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
