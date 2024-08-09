import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const getImage = gql`
  query KeanuImage(
    $width: Int!
    $height: Int
    $greyscale: Boolean
    $young: Boolean
    $historyId: String
  ) {
    keanuImage(
      width: $width
      height: $height
      greyscale: $greyscale
      young: $young
      historyId: $historyId
    ) {
      url
    }
  }
`;

export const getHistory = gql`
  query GetHistory($limit: Int) {
    getHistory(limit: $limit) {
      url
      greyscale
      height
      width
      young
      id
    }
  }
`;
