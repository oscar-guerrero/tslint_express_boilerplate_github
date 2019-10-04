import parser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import { Router } from 'express';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';

// All our middleware wrappers accept express router class.
export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};

morgan.format(
  'myformat',
  '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms'
);

export const handleMorgan = (router: Router) => {
  router.use(morgan('combined', { stream: accessLogStream }));
};

const accessLogStream = fs.createWriteStream(path.join('./', 'access.log'), {
  flags: 'a'
});
