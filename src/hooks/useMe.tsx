import React from "react";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { MeQuery } from "../generated/types";
import { onError } from "../utility/utility";
import { TOKEN } from "../constants";
import { getIsLoggedIn, getToken } from "../apollo";

const MEQUERY = gql`
  query me {
    me {
      id
      email
      role
      isEmailVerified
    }
  }
`;

const useMe = () => {
  return useLazyQuery<MeQuery>(MEQUERY, {
    onError: (error) => {
      onError(error);
      localStorage.removeItem(TOKEN);
      getToken("");
      getIsLoggedIn(false);
    },
  });
};

export default useMe;
