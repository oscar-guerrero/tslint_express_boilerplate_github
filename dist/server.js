"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
// as we’re adding more and more middleware we don’t have to change this code.
// Only create its file under ./middleware and import it in ./middleware/index.ts.
const middleware_1 = __importDefault(require("./middleware"));
const services_1 = __importDefault(require("./services"));
const utils_1 = require("./utils");
const router = express_1.default();
// as we’re adding more and more middleware we don’t have to change this code.
// Only create its file under ./middleware and import it in ./middleware/index.ts.
utils_1.applyMiddleware(middleware_1.default, router);
// this allows us to quickly add new functionality under ./service directory,
// and all we have to do is to import their routes in ./service/index.ts.
utils_1.applyRoutes(services_1.default, router);
const { PORT = 3000 } = process.env;
const server = http_1.default.createServer(router);
server.listen(PORT, () => 
// tslint:disable-next-line:no-console
console.log(`Server is running http://localhost:${PORT}...`));
//# sourceMappingURL=server.js.map