// we will import all of middleware for providing a single connection point for our server.ts

import { handleAPIDocs } from './apiDocs';
import {
  handleBodyRequestParsing,
  handleCompression,
  handleCors
} from './common';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleAPIDocs
];
