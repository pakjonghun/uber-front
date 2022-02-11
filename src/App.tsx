import { gql, useQuery } from "@apollo/client";
import React from "react";
import LoginRouter, { loggedInVar } from "./routers/login.router";
import LogoutRouter from "./routers/logout.router";

const IS_LOGGED_IN = gql`
  query {
    isLoggedIn @client
  }
`;

function App() {
  // const { loading, data } = useQuery(IS_LOGGED_IN);
  const isLoggedIn = loggedInVar();
  console.log(isLoggedIn);

  return isLoggedIn ? <LoginRouter /> : <LogoutRouter />;
}

export default App;
