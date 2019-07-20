import express from 'express';
import http from 'http';

// as we’re adding more and more middleware we don’t have to change this code.
// Only create its file under ./middleware and import it in ./middleware/index.ts.
import middleware from './middleware';
import routes from './services';
import { applyMiddleware, applyRoutes } from './utils';

const router = express();

// as we’re adding more and more middleware we don’t have to change this code.
// Only create its file under ./middleware and import it in ./middleware/index.ts.
applyMiddleware(middleware, router);
// this allows us to quickly add new functionality under ./service directory,
// and all we have to do is to import their routes in ./service/index.ts.
applyRoutes(routes, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  // tslint:disable-next-line:no-console
  console.log(`Server is running http://localhost:${PORT}...`)
);
