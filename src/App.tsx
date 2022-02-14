import React from "react";
import { useReactiveVar } from "@apollo/client";
import { getIsLoggedIn } from "./apollo";
import LoginRouter from "./routers/login.router";
import LogoutRouter from "./routers/logout.router";

function App() {
  const isLoggedIn = useReactiveVar(getIsLoggedIn);
  return isLoggedIn ? <LoginRouter /> : <LogoutRouter />;
}

export default App;
