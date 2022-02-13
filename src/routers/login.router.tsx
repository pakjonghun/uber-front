import React from "react";
import { getIsLoggedIn } from "../apollo";

const LogInRouter = () => {
  const onClick = () => {
    getIsLoggedIn(false);
  };
  return (
    <div>
      <h1>LogIn</h1>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};

export default LogInRouter;
