import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";

const httpLink = createHttpLink({ uri: "http://localhost:3000/graphql" });

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const getImage = gql`
  query (
    $width: String!
    $height: String
    $greyScale: Boolean
    $young: Boolean
  ) {
    keanuImage(
      width: $width
      height: $height
      greyScale: $greyScale
      young: $young
    ) {
      url
    }
  }
`;
