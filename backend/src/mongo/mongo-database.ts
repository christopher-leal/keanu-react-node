import mongoose from "mongoose";
import { logger } from "../config";

interface Options {
  host: string;
  port: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: Options) {
    const { host, port, dbName } = options;
    try {
      await mongoose.connect(
        `mongodb://${host}:${port}/${dbName}`
      );
      logger.info("Mongo connected");
      return true;
    } catch (error) {
      logger.error("Mongo connection error");
      throw error;
    }
  }
}
