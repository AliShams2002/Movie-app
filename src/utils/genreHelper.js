import { MOVIE_GENRES, TV_GENRES } from "./constants";

// Handel name`s of movie genre
export const handelMovieGenre = (genres) => {
  let genresName = [];
  for (const genre of genres) {
    const getGenreData = MOVIE_GENRES.find((i) => i.value == genre);
    genresName.push(getGenreData?.label);
  }
  const compositionGenres = genresName.join("، ");
  return compositionGenres;
};

// Handel name`s of tv genre
export const handelTvGenre = (genres) => {
  let genresName = [];
  for (const genre of genres) {
    const getGenreData = TV_GENRES.find((i) => i.value == genre);
    genresName.push(getGenreData?.label);
  }
  const compositionGenres = genresName.join("، ");
  return compositionGenres;
};
