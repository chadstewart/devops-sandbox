import { format, createLogger, transports } from 'winston';
import path from 'path';
const { timestamp, combine, errors, json } = format;

function buildProdLogger() {
  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    transports: [
      new transports.File({ filename: path.join(__dirname, "../../logs/", "general.log") })
    ],
  });
}

export default buildProdLogger;