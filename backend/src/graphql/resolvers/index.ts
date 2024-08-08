import { DataSourceContext } from "..";

export const imageResolver = {
  Query: {
    keanuImage: async (_: unknown, { width, height, greyScale, young}: {width:string, height?: string, greyScale?: boolean, young?: boolean}, { dataSources }: DataSourceContext) => {
      return dataSources.keanuAPI.getImage(width, height, greyScale, young);
    },
  },
};
