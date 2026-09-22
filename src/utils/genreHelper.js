import { MOVIEGENRE, TVGENRE } from "./constants";


export const handelMovieGenre = (genres) => {
  let genresName = [];
  for (const genre of genres) {
    const getGenreData = MOVIEGENRE.find((i) => i.value == genre);
    genresName.push(getGenreData?.label);
  }
  const compositionGenres = genresName.join("، ");
  return compositionGenres;
};

export const seriesFormatGenres = (genres) => {
  let genresName = [];
  for (const genre of genres) {
    const getGenreData = TVGENRE.find((i) => i.id == genre);
    genresName.push(getGenreData?.name);
  }
  const compositionGenres = genresName.join("، ");
  return compositionGenres;
};
