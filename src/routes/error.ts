import { Request, Response } from 'express';
import { HTTPError } from '../utils/httpErrors';

export default [
  {
    handler: async (req: Request, res: Response) => {
      //   res.send('Hello');
      // force a 500 error here, comment the one above and uncomment the one below
      throw new Error('works like shit');
      // tslint:disable-next-line:no-string-throw
      //   throw 'fucking shit';
    },
    method: 'get',
    path: '/error500'
  },
  {
    handler: async (req: Request, res: Response) => {
      //   res.send('Hello');
      // force a 500 error here, comment the one above and uncomment the one below
      throw new HTTPError(403, 'works like shit');
    },
    method: 'get',
    path: '/error403'
  }
];
