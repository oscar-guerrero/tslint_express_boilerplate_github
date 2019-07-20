import { NextFunction, Request, Response, Router } from 'express';
import * as ErrorHandler from '../utils/ErrorHandler';

// handle404Error the way you handle 404 in express. By adding a fallback middleware if nothing else was found.

const handle404Error = (router: Router) => {
  router.use((req: Request, res: Response) => {
    ErrorHandler.notFoundError();
  });
};

// handleClientErrors catches client API errors like Bad request or Unauthorized.
const handleClientError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

// handleServerErrors a place where we handle “Internal Server Error”.
const handleServerError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, res, next);
  });
};

export default [handle404Error, handleClientError, handleServerError];
