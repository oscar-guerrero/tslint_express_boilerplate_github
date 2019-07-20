"use strict";
// we will import all of middleware for providing a single connection point for our server.ts
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
exports.default = [common_1.handleCors, common_1.handleBodyRequestParsing, common_1.handleCompression];
//# sourceMappingURL=index.js.map