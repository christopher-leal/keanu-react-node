import mongoose from "mongoose";

interface Options {
  username: string;
  password: string;
  host: string;
  port: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: Options) {
    const { username, password, host, port, dbName } = options;
    console.log(username, password, host, port, dbName)
    try {
      await mongoose.connect(
        `mongodb://${username}:${password}@${host}:${port}/${dbName}?authSource=admin`
      );

      console.log("Mongo connected");
      return true;
    } catch (error) {
      console.log("Mongo connection error");
      throw error;
    }
  }
}
