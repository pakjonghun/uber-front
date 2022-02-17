import {
  CreateRestMutation,
  CreateRestMutationVariables,
  RegisterRestDto,
} from "./../../generated/types";
import { onError } from "./../../utility/utility";
import { DISH_FRAGMENT, REST_FRAGMENT } from "./../../fragments";
import { gql, useMutation, useQuery } from "@apollo/client";
import { OutMyRest } from "../../generated/types";

const MY_REST_QUERTY = gql`
  ${REST_FRAGMENT}
  ${DISH_FRAGMENT}
  query myRest {
    myRest {
      rest {
        ...RestSearchField
        dish {
          ...DishField
        }
      }
    }
  }
`;

export const useMyRest = () => {
  return useQuery<OutMyRest[]>(MY_REST_QUERTY);
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

export const useCreateRest = () => {
  return useMutation<CreateRestMutation, CreateRestMutationVariables>(
    REGISTER_REST_MUTATION
  );
};
