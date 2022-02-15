import { TOKEN } from "./constants";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const token = localStorage.getItem(TOKEN);

export const getIsLoggedIn = makeVar(!!token);
export const getToken = makeVar(token);

const link = createHttpLink({
  uri: "http://localhost:8000/graphql",
  credentials: "include",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
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
