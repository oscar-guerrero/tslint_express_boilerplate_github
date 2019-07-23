import request from 'request-promise';

export const getMovies = async () => {
  const url = 'https://swapi.co/api/films/';
  const response = await request(url);
  return JSON.parse(response);
};

export const getMovie = async (query: string) => {
  const url = `https://swapi.co/api/films/${query}`;

  const response = await request(url);
  return JSON.parse(response);
};
