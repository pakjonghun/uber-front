import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";

export const getIsLoggedIn = makeVar(false);
export const getToken = makeVar("");

const link = createHttpLink({
  uri: "http://localhost:8000/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return getIsLoggedIn();
            },
          },
          token: {
            read() {
              getToken();
            },
          },
        },
      },
    },
  }),
});

export default client;
