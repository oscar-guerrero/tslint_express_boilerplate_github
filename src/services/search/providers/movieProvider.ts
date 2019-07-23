import request from 'request-promise';
import { movieRequestError } from '../../../utils/ErrorHandler';

export const getMovies = async () => {
  const url = 'https://swapi.co/api/films/';
  const response = await request(url);
  return JSON.parse(response);
};

export const getMovie = async (query: string) => {
  // tslint:disable-next-line:no-console
  console.log(query);

  const url = `https://swapi.co/api/films/${query}`;

  try {
    const response = await request(url);
    return JSON.parse(response);
  } catch (error) {
    movieRequestError('Movie not found at the source API');
  }
};
