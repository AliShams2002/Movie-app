import { BiMovie, BiPlayCircle } from "react-icons/bi";
import { BsPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div className="relative w-full h-screen bg-black overflow-hidden text-white">
        {/* Background Image */}
        <img
          src="/images/hero.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex items-center h-full px-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-2 text-sm text-gray-300">
              <span>⭐ 9.2</span>
              <span>2024</span>
              <span>148 دقیقه</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              نبرد آسمان‌ها
            </h1>

            <p className="text-gray-300 mb-6">
              داستانی حماسی از یک خلبان جنگنده که برای نجات کشورش با دشمنان
              مبارزه می‌کند.
            </p>

            <div className="flex items-center gap-2 mb-6 text-sm text-gray-300">
              <BiMovie />
              <span>اکشن | درام </span>
            </div>

            <div className="flex gap-4">
              <Link to="/movie/test">
                <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-lg font-semibold">
                  ▶ تماشای فیلم
                </button>
              </Link>
              <button className="bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-lg">
                اطلاعات بیشتر
              </button>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          <span className="w-8 h-1 bg-white/30 rounded"></span>
          <span className="w-8 h-1 bg-red-500 rounded"></span>
          <span className="w-8 h-1 bg-white/30 rounded"></span>
        </div>
      </div>
      <section className="w-full bg-[#1e1e1e] text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Title */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold mb-2">جستجو بر اساس ژانر</h2>
            <p className="text-gray-400 text-sm">
              فیلم و سریال مورد علاقه خود را پیدا کنید
            </p>
          </div>

          {/* Genre Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-24">
            {[
              "انیمیشن",
              "ماجراجویی",
              "عاشقانه",
              "وحشت",
              "علمی-تخیلی",
              "کمدی",
              "درام",
              "اکشن",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#2a2a2a] rounded-xl py-6 flex flex-col items-center justify-center hover:bg-red-700 transition group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/50 flex items-center justify-center mb-3 transition">
                  <span className="text-lg">🎬</span>
                </div>
                <span className="text-xs text-gray-200">{item}</span>
              </div>
            ))}
          </div>

          {/* Quick Access */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold mb-2">
              دسترسی سریع به سریال‌ها
            </h3>
            <p className="text-gray-400 text-sm">
              سریال مورد علاقه خود را انتخاب کنید
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sci-Fi */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-blue-500">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                🚀
              </div>
              <h4 className="font-bold mb-1">سریال‌های علمی-تخیلی</h4>
              <p className="text-sm text-white/80 mb-6">سفر به آینده</p>
              <span className="text-sm flex items-center gap-2">
                مشاهده همه ←
              </span>
            </div>

            {/* Comedy */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-orange-500 to-amber-500">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                😂
              </div>
              <h4 className="font-bold mb-1">سریال‌های کمدی</h4>
              <p className="text-sm text-white/80 mb-6">لحظات خنده‌دار</p>
              <span className="text-sm flex items-center gap-2">
                مشاهده همه ←
              </span>
            </div>

            {/* Drama */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-purple-600 to-pink-500">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                🎭
              </div>
              <h4 className="font-bold mb-1">سریال‌های درام</h4>
              <p className="text-sm text-white/80 mb-6">داستان‌های احساسی</p>
              <span className="text-sm flex items-center gap-2">
                مشاهده همه ←
              </span>
            </div>

            {/* Action */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-red-600 to-red-500">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
                ⚔️
              </div>
              <h4 className="font-bold mb-1">سریال‌های اکشن</h4>
              <p className="text-sm text-white/80 mb-6">
                هیجان‌انگیزترین سریال‌ها
              </p>
              <span className="text-sm flex items-center gap-2">
                مشاهده همه ←
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#141414] text-white py-20 flex flex-col items-center gap-20">
        <div className="w-full ">
          <div id="best" className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-extrabold">فیلم‌های برتر</h2>
              <button className="text-red-500 text-sm hover:underline flex items-center gap-1">
                نمایش همه ←
              </button>
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
        <div className="w-full ">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-extrabold">فیلم‌های برتر</h2>
              <button className="text-red-500 text-sm hover:underline flex items-center gap-1">
                نمایش همه ←
              </button>
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
      </section>
    </div>
  );
}
