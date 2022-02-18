import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import {
  CreateRestMutation,
  CreateRestMutationVariables,
  MyRestQuery,
  MyRestQueryVariables,
  RegisterRestDto,
} from "./../../generated/types";
import { onError } from "./../../utility/utility";
import { DISH_FRAGMENT, REST_FRAGMENT } from "./../../fragments";
import { gql, useApolloClient, useMutation, useQuery } from "@apollo/client";
import { OutMyRest } from "../../generated/types";
import { ClientRequest } from "http";

export const MY_REST_QUERTY = gql`
  ${REST_FRAGMENT}
  query myRest {
    myRest {
      rest {
        ...RestSearchField
      }
    }
  }
`;

export const useMyRest = () => {
  return useQuery<MyRestQuery, MyRestQueryVariables>(MY_REST_QUERTY);
};

const REGISTER_REST_MUTATION = gql`
  ${REST_FRAGMENT}
  mutation createRest($args: RegisterRestDto!) {
    createRest(args: $args) {
      isSuccess
      error
      rest {
        ...RestSearchField
      }
    }
  }
`;

export const useCreateRest = (setUploading: (status: boolean) => void) => {
  const nav = useNavigate();
  const client = useApolloClient();
  return useMutation<CreateRestMutation, CreateRestMutationVariables>(
    REGISTER_REST_MUTATION,
    {
      onCompleted: (data) => {
        if (data && data.createRest.isSuccess) {
          setUploading(false);

          const d = client.readQuery({ query: MY_REST_QUERTY });

          client.writeQuery({
            query: MY_REST_QUERTY,
            data: {
              myRest: {
                ...d.myRest,
                rest: [data.createRest.rest, ...d.myRest.rest],
              },
            },
          });

          nav("/");
        }
      },
    }
  );
};
