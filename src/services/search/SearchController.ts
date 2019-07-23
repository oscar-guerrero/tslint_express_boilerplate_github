import { getMovie, getMovies } from './providers/movieProvider';

export const getAllMovies = async () => {
  return await getMovies();
};

export const getSingleMovie = async (q: string) => {
  return await getMovie(q);
};
