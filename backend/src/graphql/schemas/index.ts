export const imageSchema = `#graphql
  type Image {
    url: String!
  }

  type History {
    id: String!
    width: Int!
    height: Int
    greyscale: Boolean
    young: Boolean
    url: String!
  }

  type Query {
    keanuImage(
      width: Int!
      height: Int
      greyscale: Boolean
      young: Boolean
      historyId: String
    ): Image

    getHistory(limit: Int): [History]
  }
`;
