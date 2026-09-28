export const FILTERS = {
  DEFAULT: {
    genre: "",
    sort_by: "popularity.desc",
    vote: "",
    year: "",
    page: 1,
  },

  TYPE_OPTIONS: [
    {
      label: "All",
      value: "",
    },
    {
      label: "Movie",
      value: "movie",
    },
    {
      label: "Tv",
      value: "tv",
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
    { label: "All", value: "" },
    { label: "+5", value: 5 },
    { label: "+6", value: 6 },
    { label: "+7", value: 7 },
    { label: "+8", value: 8 },
  ],

  YEAR_OPTIONS: [
    { value: "", label: "All" },
    { value: "2026", label: "2026" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "Befor 2023" },
  ],
};
