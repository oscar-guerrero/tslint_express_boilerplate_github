import { Request, Response } from 'express';
import { logger } from '../utils/logger';

export default [
  {
    handler: async (req: Request, res: Response) => {
      logger.info('Hello from the hello route');
      res.send('Hello');
      // force a 500 error here, comment the one above and uncomment the one below
      // throw new Error('works like shit');
    },
    method: 'get',
    path: '/'
  }
];
