import * as winston from 'winston';

const infraFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json(),
);

const localFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.simple(),
);

/**
 * Instance of winston logger
 * @type {object}
 */
export const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({ filename: './logs/combined.log' }),
  ],
  format: process.env.NODE_ENV === 'dev' ? localFormat : infraFormat,
});

export default logger;