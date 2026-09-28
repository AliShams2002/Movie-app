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

// Lable and value of static filters
export const FILTERS = {
  DEFAULT: {
    q: "",
    type: "movie",
    genre: null,
    year: null,
    minRating: null,
    sort: "popularity.desc",
    list: null,
  },

  TYPE_OPTIONS: [
    {
      label: "Movie",
      value: "movie",
    },
    {
      label: "Tv",
      value: "tv",
    },
  ],

  MOVIE_LISTS: [
    {
      label: "Now Playing",
      value: "now_playing",
    },
    {
      label: "Popular",
      value: "popular",
    },
    {
      label: "Top Rated",
      value: "top_rated",
    },
    {
      label: "Upcoming",
      value: "upcoming",
    },
  ],

  TV_LISTS: [
    {
      label: "Airing Today",
      value: "airing_today",
    },
    {
      label: "On The Air",
      value: "on_the_air",
    },
    {
      label: "Popular",
      value: "popular",
    },
    {
      label: "Top Rated",
      value: "top_rated",
    },
  ],

  SORT_OPTIONS: [
    {
      label: "popularity.desc",
      value: "popularity.desc",
    },
    {
      label: "primary_release_date.desc",
      value: "primary_release_date.desc",
    },
    {
      label: "vote_average.desc",
      value: "vote_average.desc",
    },
  ],

  VOTE_OPTIONS: [
    { label: "All", value: null },
    { label: "+5", value: 5 },
    { label: "+6", value: 6 },
    { label: "+7", value: 7 },
    { label: "+8", value: 8 },
  ],

  YEAR_OPTIONS: [
    { label: "All", value: null },
    { label: "2026", value: "2026" },
    { label: "2025", value: "2025" },
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
  ],
};

// List of MOVIE genres with names, icons and styles
export const MOVIE_GENRES = [
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

// List of TV genres with names, icons and styles
export const TV_GENRES = [
  {
    value: "",
    label: "All",
    icon: <Film />,
    color: "bg-red-500/20 text-red-500 border-red-500/20",
    isPapular: false,
  },
  {
    value: 10759,
    label: "Action_Adventure",
    icon: <Zap />,
    color: "bg-red-500/20 text-red-500 border-red-500/20",
    isPapular: true,
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
    isPapular: true,
  },
  {
    value: 10751,
    label: "Family",
    icon: <Users />,
    color: "bg-green-500/20 text-green-400 border-green-500/20",
    isPapular: false,
  },
  {
    value: 10762,
    label: "Kids",
    icon: <Cat />,
    color: "bg-lime-500/20 text-lime-400 border-lime-500/20",
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
    value: 10763,
    label: "News",
    icon: <Tv />,
    color: "bg-sky-500/20 text-sky-400 border-sky-500/20",
    isPapular: false,
  },
  {
    value: 10764,
    label: "Reality",
    icon: <Users />,
    color: "bg-teal-500/20 text-teal-400 border-teal-500/20",
    isPapular: false,
  },
  {
    value: 10765,
    label: "Science_Fiction_Fantasy",
    icon: <Rocket />,
    color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/20",
    isPapular: true,
  },
  {
    value: 10766,
    label: "Soap",
    icon: <Heart />,
    color: "bg-rose-500/20 text-rose-400 border-rose-500/20",
    isPapular: false,
  },
  {
    value: 10767,
    label: "Talk",
    icon: <SmilePlus />,
    color: "bg-orange-500/20 text-orange-400 border-orange-500/20",
    isPapular: false,
  },
  {
    value: 10768,
    label: "War_Politics",
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
