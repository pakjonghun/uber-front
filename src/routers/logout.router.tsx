import React from "react";
import { loggedInVar } from "./login.router";

const LogoutRouter = () => {
  const isLoggedIn = loggedInVar();

  const onClick = () => {
    loggedInVar(true);
  };

  return (
    <div>
      <h1>LogoutRouter</h1>
      <button>LogIn</button>
    </div>
  );
};

export default LogoutRouter;
