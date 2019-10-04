import { Request, Response } from 'express';
import { HTTPError } from '../utils/httpErrors';

export default [
  {
    handler: async (req: Request, res: Response) => {
      // force a 500 error here, comment the one above and uncomment the one below
      //   throw new Error('works like shit');
      // tslint:disable-next-line:no-string-throw
      // throw 'fucking shit';
      try {
        const fatalError = JSON.parse('{message: "hola"}');
      } catch (error) {
        throw new Error('error parsing JSON in error.ts');
      }

      res.send('I am not supposed to be shown');
    },
    method: 'get',
    path: '/error500'
  },
  {
    handler: async (req: Request, res: Response) => {
      //   res.send('Hello');
      // force a 500 error here, comment the one above and uncomment the one below
      throw new HTTPError(401, 'warning message');
    },
    method: 'get',
    path: '/error401'
  }
];
