import { Request, Response } from 'express';
import { checkSearchParams } from '../../middleware/checks';
import { getAllMovies, getSingleMovie } from './SearchController';

export default [
  {
    handler: async (req: Request, res: Response) => {
      res.send('Hello world!');
      // force a 500 error here, comment the one above and uncomment the one below
      // throw new Error('works like shit');
    },
    method: 'get',
    path: '/'
  },
  {
    handler: [
      async (req: Request, res: Response) => {
        const result = await getAllMovies();
        res.status(200).send(result);
      }
    ],
    method: 'get',
    path: '/api/v1/movies'
  },
  {
    handler: [
      checkSearchParams,
      async ({ query }: Request, res: Response) => {
        const result = await getSingleMovie(query.q);
        res.status(200).send(result);
      }
    ],
    method: 'get',
    path: '/api/v1/movie'
  }
];
