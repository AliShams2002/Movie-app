import { FILTERS } from "./constants";

// Get all filter params
export function parsFilters(searchParams) {
  return {
    q: searchParams.get("q") || FILTERS.DEFAULT.q,
    type: searchParams.get("type") || FILTERS.DEFAULT.type,
    genre: searchParams.get("genre")
      ? Number(searchParams.get("genre"))
      : FILTERS.DEFAULT.genre,
    year: searchParams.get("year")
      ? Number(searchParams.get("year"))
      : FILTERS.DEFAULT.year,
    minRating: searchParams.get("minRating")
      ? Number(searchParams.get("minRating"))
      : FILTERS.DEFAULT.minRating,
    sort: searchParams.get("sort") || FILTERS.DEFAULT.sort,
    list: searchParams.get("list") || FILTERS.DEFAULT.list,
  };
}

// Handel active filters
export function buildSearchParams(filters) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== null && value !== "" && value !== undefined) {
      params.set(key, String(value));
    }
  });
  return params;
}

// Get active filters
export function getActiveFilters(filters) {
  return Object.keys(FILTERS.DEFAULT).filter(
    (key) => filters[key] !== FILTERS.DEFAULT[key],
  );
}

// Check has active filters
export function hasActiveFilters(filters) {
  return getActiveFilters(filters).length > 0;
}
