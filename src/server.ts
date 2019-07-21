import express from 'express';
import http from 'http';

// as we’re adding more and more middleware we don’t have to change this code.
// Only create its file under ./middleware and import it in ./middleware/index.ts.
import middleware from './middleware';
import routes from './services';
import { applyMiddleware, applyRoutes } from './utils';

import errorHandlers from './middleware/errorHandlers';

// handlers for uncaughtException and uncaughtException events. Can be removed
// In case of error kill this instance and spawn a new one. Tools like forever or pm2 can do it for us
process.on('uncaughtException', (e: any) => {
  // tslint:disable-next-line:no-console
  // console.log(e);
  process.exit(1);
});
process.on('unhandledRejection', (e: any) => {
  // tslint:disable-next-line:no-console
  // console.log(e);
  process.exit(1);
});

const router = express();

// as we’re adding more and more middleware we don’t have to change this code.
// Only create its file under ./middleware and import it in ./middleware/index.ts.
applyMiddleware(middleware, router);

// this allows us to quickly add new functionality under ./service directory,
// and all we have to do is to import their routes in ./service/index.ts.
applyRoutes(routes, router);

applyMiddleware(errorHandlers, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server is running http://localhost:${PORT}...`)
);
