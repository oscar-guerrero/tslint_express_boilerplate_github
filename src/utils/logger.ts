import { config, createLogger, format, transports } from 'winston';

const { combine, timestamp, label, prettyPrint } = format;

export const logger = createLogger({
  levels: config.syslog.levels,
  // tslint:disable-next-line:object-literal-sort-keys
  format: combine(
    label({ label: 'in the login service' }),
    timestamp(),
    prettyPrint()
  ),
  // tslint:disable-next-line:object-literal-sort-keys
  defaultMeta: { service: 'login-service' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'warn.log', level: 'warning' }),
    new transports.File({ filename: 'info.log', level: 'info' })
  ],
  exceptionHandlers: [new transports.File({ filename: 'exceptions.log' })]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple()
    })
  );
}
