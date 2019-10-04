import * as winston from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, prettyPrint } = winston.format;

export const logger = winston.createLogger({
  level: 'info',
  // tslint:disable-next-line:object-literal-sort-keys
  format: combine(timestamp(), prettyPrint()),
  // tslint:disable-next-line:object-literal-sort-keys
  defaultMeta: { service: 'login-service' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
    new winston.transports.File({ filename: 'warn.log', level: 'warn' }),
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}
