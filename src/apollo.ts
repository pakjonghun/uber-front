import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const getIsLoggedIn = makeVar(false);

const client = new ApolloClient({
  uri: "http://127.0.0:8000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return getIsLoggedIn();
            },
          },
        },
      },
    },
  }),
});

export default client;
