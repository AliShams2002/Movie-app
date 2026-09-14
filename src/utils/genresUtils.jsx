import {
  Castle,
  Cat,
  Drama,
  Film,
  Ghost,
  Heart,
  Laugh,
  Map,
  Music,
  Rocket,
  Search,
  SmilePlus,
  Sword,
  Swords,
  Tv,
  Users,
  WandSparkles,
  Zap,
} from "lucide-react";

export const movieGenre = [
  {
    value: "",
    label: "All",
    icon: <Film />,
    color: "bg-red-500/20 text-red-500 border-red-500/20",
    isPapular: false,
  },
  {
    value: 28,
    label: "Action",
    icon: <Zap />,
    color: "bg-red-500/20 text-red-500 border-red-500/20",
    isPapular: true,
  },
  {
    value: 12,
    label: "Adventure",
    icon: <Map />,
    color: "bg-orange-500/20 text-orange-500 border-orange-500/20",
    isPapular: false,
  },
  {
    value: 16,
    label: "Animation",
    icon: <Cat />,
    color: "bg-yellow-400/20 text-yellow-400 border-yellow-400/20",
    isPapular: false,
  },
  {
    value: 35,
    label: "Comedy",
    icon: <Laugh />,
    color: "bg-amber-400/20 text-amber-400 border-amber-400/20",
    isPapular: true,
  },
  {
    value: 80,
    label: "Crime",
    icon: <Swords />,
    color: "bg-slate-500/20 text-slate-300 border-slate-500/20",
    isPapular: true,
  },
  {
    value: 99,
    label: "Documentary",
    icon: <Film />,
    color: "bg-stone-500/20 text-stone-300 border-stone-500/20",
    isPapular: false,
  },
  {
    value: 18,
    label: "Drama",
    icon: <Drama />,
    color: "bg-purple-500/20 text-purple-400 border-purple-500/20",
    isPapular: false,
  },
  {
    value: 10751,
    label: "Family",
    icon: <Users />,
    color: "bg-green-500/20 text-green-400 border-green-500/20",
    isPapular: false,
  },
  {
    value: 14,
    label: "Fantasy",
    icon: <WandSparkles />,
    color: "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/20",
    isPapular: false,
  },
  {
    value: 36,
    label: "History",
    icon: <Castle />,
    color: "bg-yellow-700/20 text-yellow-600 border-yellow-700/20",
    isPapular: false,
  },
  {
    value: 27,
    label: "Horror",
    icon: <Ghost />,
    color: "bg-zinc-700/20 text-zinc-300 border-zinc-700/20",
    isPapular: true,
  },
  {
    value: 10402,
    label: "Music",
    icon: <Music />,
    color: "bg-pink-500/20 text-pink-400 border-pink-500/20",
    isPapular: false,
  },
  {
    value: 9648,
    label: "Mystery",
    icon: <Search />,
    color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/20",
    isPapular: true,
  },
  {
    value: 10749,
    label: "Romance",
    icon: <Heart />,
    color: "bg-rose-500/20 text-rose-400 border-rose-500/20",
    isPapular: false,
  },
  {
    value: 878,
    label: "Science_Fiction",
    icon: <Rocket />,
    color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/20",
    isPapular: true,
  },
  {
    value: 10770,
    label: "TV Movie",
    icon: <Tv />,
    color: "bg-sky-500/20 text-sky-400 border-sky-500/20",
    isPapular: false,
  },
  {
    value: 53,
    label: "Thriller",
    icon: <SmilePlus />,
    color: "bg-orange-600/20 text-orange-400 border-orange-600/20",
    isPapular: false,
  },
  {
    value: 10752,
    label: "War",
    icon: <Sword />,
    color: "bg-red-800/20 text-red-600 border-red-800/20",
    isPapular: false,
  },
  {
    value: 37,
    label: "Western",
    icon: <Sword />,
    color: "bg-amber-700/20 text-amber-500 border-amber-700/20",
    isPapular: false,
  },
];

export const seriesGenres = [
  {
    id: 10759,
    name: "اکشن-ماجراجویی",
    icon: "⚔️",
    color: "from-red-600 to-red-500",
  },
  {
    id: 16,
    name: "انیمیشن",
    icon: "🐭",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 35,
    name: "کمدی",
    icon: "😂",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 80,
    name: "جنایی",
    icon: "🕵️",
    color: "from-gray-700 to-gray-600",
  },

  {
    id: 18,
    name: "درام",
    icon: "🎭",
    color: "from-purple-600 to-pink-500",
  },

  {
    id: 9648,
    name: "رازآلود",
    icon: "🔍",
    color: "from-indigo-600 to-purple-600",
  },

  {
    id: 10765,
    name: "علمی-تخیلی-فانتزی",
    icon: "🚀",
    color: "from-blue-600 to-blue-500",
  },
  {
    id: 10751,
    name: "خانوادگی",
    icon: "👨‍👩‍👧‍👦",
    color: "from-green-600 to-emerald-500",
  },
  {
    id: 99,
    name: "مستند",
    icon: "📽️",
    color: "from-stone-600 to-stone-500",
  },
  {
    id: 10766,
    name: "سریال‌های روزانه",
    icon: "📺",
    color: "from-teal-600 to-teal-500",
  },

  {
    id: 10762,
    name: "کودکان",
    icon: "🧸",
    color: "from-sky-500 to-blue-500",
  },
  {
    id: 10763,
    name: "اخبار",
    icon: "📰",
    color: "from-slate-600 to-slate-500",
  },
  {
    id: 10764,
    name: "واقع‌نما",
    icon: "📹",
    color: "from-rose-600 to-pink-600",
  },
  {
    id: 10767,
    name: "گفتگو‌محور",
    icon: "🎙️",
    color: "from-cyan-600 to-cyan-500",
  },
  {
    id: 10768,
    name: "جنگی-سیاسی",
    icon: "⚡",
    color: "from-amber-700 to-amber-600",
  },
  {
    id: 37,
    name: "وسترن",
    icon: "🤠",
    color: "from-amber-800 to-yellow-800",
  },
];

export const movieFormatGenres = (genres) => {
  let genresName = [];
  for (const genre of genres) {
    const getGenreData = movieGenre.find((i) => i.value == genre);
    genresName.push(getGenreData?.label);
  }
  const compositionGenres = genresName.join("، ");
  return compositionGenres;
};

export const seriesFormatGenres = (genres) => {
  let genresName = [];
  for (const genre of genres) {
    const getGenreData = seriesGenres.find((i) => i.id == genre);
    genresName.push(getGenreData?.name);
  }
  const compositionGenres = genresName.join("، ");
  return compositionGenres;
};
