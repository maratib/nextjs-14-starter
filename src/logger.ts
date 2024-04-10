// src/lib/logger.js
import winston, { format } from "winston";
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console({
      handleExceptions: true,
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
  // transports: [
  //   new winston.transports.File({
  //     filename: "app.log",
  //   }),
  // ],
});

export { logger };
