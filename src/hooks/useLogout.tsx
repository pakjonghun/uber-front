import React from "react";
import { gql, useMutation } from "@apollo/client";

const LOGOUTMUTATION = gql`
  mutation logout {
    logout {
      id
    }
  }
`;

const useLogout = () => {
  const [func] = useMutation(LOGOUTMUTATION);
  return func;
};

export default useLogout;
