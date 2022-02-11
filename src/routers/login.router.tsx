import { makeVar } from "@apollo/client";
import React from "react";

export const loggedInVar = makeVar(false);
const LogInRouter = () => {
  const a = loggedInVar();
  console.log(a);
  const onClick = () => {
    loggedInVar(false);
  };
  return (
    <div>
      <h1>LogIn</h1>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

export default LogInRouter;
