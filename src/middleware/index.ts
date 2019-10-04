// we will import all of middleware for providing a single connection point for our server.ts

import {
  handleBodyRequestParsing,
  handleCompression,
  handleCors,
  handleMorgan
} from './common';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleMorgan
];
