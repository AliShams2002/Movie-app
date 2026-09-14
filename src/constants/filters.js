export const FILTERS = {
  DEFAULT: {
    genre: "",
    sort_by: "popularity.desc",
    vote: "",
    year: "",
    page: 1,
  },

  SORT_OPTIONS: [
    {
      label: "محبوب‌ترین",
      value: "popularity.desc",
    },
    {
      label: "جدیدترین",
      value: "primary_release_date.desc",
    },
    {
      label: "بالاترین امتیاز",
      value: "vote_average.desc",
    },
  ],

  VOTE_OPTIONS: [
    { label: "همه", value: "" },
    { label: "بالای 5", value: 5 },
    { label: "بالای 6", value: 6 },
    { label: "بالای 7", value: 7 },
    { label: "بالای 8", value: 8 },
  ],

  YEAR_OPTIONS: [
    { value: "", label: "همه" },
    { value: "2026", label: "2026" },
    { value: "2025", label: "2025" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "قبل از 2023" },
  ],
};
