// Base URL for TMDB image CDN
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

// Builds a full TMDB image URL from a relative path and size
export const getTmdbImage = (path, size = "w342") => {
  if (!path) return null;

  // Strip leading slashes to avoid duplicate slashes in the URL
  const normalizedPath = path.replace(/^\/+/, "");

  return `${TMDB_IMAGE_BASE_URL}/${size}/${normalizedPath}`;
};
