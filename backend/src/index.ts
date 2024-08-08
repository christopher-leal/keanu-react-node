import { envs } from "./config";
import { MongoDatabase } from "./mongo";
import { AppRoutes } from "./routes";
import { Server } from "./server";

(() => {
  main();
})();

async function main() {
  await MongoDatabase.connect({
    dbName: envs.MONGO_DATABASE,
    host:envs.MONGO_HOST,
    port:envs.MONGO_PORT,
  });

  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start();
}
