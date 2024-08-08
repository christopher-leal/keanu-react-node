import { KeanuAPI } from "./dataSources/keanu-api";

export interface DataSourceContext {
  dataSources: {
    keanuAPI: KeanuAPI;
  };
}
