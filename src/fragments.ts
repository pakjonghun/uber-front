import { gql } from "@apollo/client";
export const REST_FRAGMENT = gql`
  fragment RestSearchField on Rest {
    id
    name
    adress
    img
    isPromited
    cate {
      id
      name
    }
  }
`;
