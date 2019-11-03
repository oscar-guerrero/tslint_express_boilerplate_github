// To apply our middleware, we will create a function which grabs the list of middleware and applies it on a router.
// The applyMiddleware helper accepts the list of middleware wrappers we define in
// ./middleware/index.ts and express.Router.

import { NextFunction, Request, Response, Router } from "express";

type Wrapper = (router: Router) => void;

// To apply our middleware, we create a function which grabs this list of middleware and applies it on a router
// The applyMiddleware helper accepts the list of middleware wrappers
// we define in ./middleware/index.ts and express.Router.
export const applyMiddleware = (
  middlewareWrappers: Wrapper[],
  router: Router,
) => {
  for (const wrapper of middlewareWrappers) {
    wrapper(router);
  }
};

type Handler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void> | void;

interface Route {
  path: string;
  method: string;
  handler: Handler | Handler[];
}

// applyRoutes function is a place where we’re adding all our route to an express router instance created in server.ts

export const applyRoutes = (routes: Route[], router: Router) => {
  for (const route of routes) {
    const { method, path, handler } = route;
    (router as any)[method](path, handler);
  }
};
