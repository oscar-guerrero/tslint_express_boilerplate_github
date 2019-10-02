import { NextFunction, Request, Response, Router } from 'express';
import { HTTPClientError, HTTPError } from '../utils/httpErrors';

// handle404Error the way you handle 404 in express. By adding a fallback middleware if nothing else was found.

const handle404Error = (router: Router) => {
  router.use((req: Request, res: Response) => {
    throw new HTTPError(404, { message: 'route not found' });
  });
};

// handleClientErrors catches client API errors like Bad request or Unauthorized.
const handleClientError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // if error not in httpErrors then call 500
    if (err instanceof HTTPClientError) {
      // tslint:disable-next-line:no-console
      console.warn(err);
      res.status(err.statusCode).send(err.message);
    } else {
      next(err);
    }
  });
};

// handleServerErrors a place where we handle “Internal Server Error”.
// our last resort for handling errors, we must handle it here,
// or uncaughtException handler will be called, and this node process will be finished.
const handleServerError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // tslint:disable-next-line:no-console
    console.error(err);
    if (process.env.NODE_ENV === 'production') {
      res.status(500).send('Internal Server Error');
    } else {
      res.status(500).send(err.stack);
    }
  });
};

export default [handle404Error, handleClientError, handleServerError];
