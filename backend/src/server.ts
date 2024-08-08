import { ApolloServer } from "@apollo/server";
import express, { Router } from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import morgan from "morgan";
import { logger } from "./config";
import { KeanuAPI } from "./graphql/dataSources/keanu-api";
import { imageSchema } from "./graphql/schemas";
import { imageResolver } from "./graphql/resolvers";
import { DataSourceContext } from "./graphql/index";

interface Options {
  port?: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port = 3000, routes } = options;

    this.port = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(cors());

    this.app.use("/api", this.routes);

    const typeDefs = [imageSchema];
    const resolvers = [imageResolver];

    const server = new ApolloServer<DataSourceContext>({
      typeDefs,
      resolvers,
    });

    await server.start();

    this.app.use(
      "/graphql",
      expressMiddleware(server, {
        context: async () => {
          const { cache } = server;
          return {
            // We create new instances of our data sources with each request,
            // passing in our server's cache.
            dataSources: {
              keanuAPI: new KeanuAPI({ cache }),
            },
          };
        },
      })
    );

    this.app.listen(this.port, () => {
      logger.info(`Server running on port ${this.port}`);
      logger.info(`GraphQL endpoint: http://localhost:${this.port}/graphql`);
    });
  }
}
