import { gql } from "@apollo/client";
export const REST_FRAGMENT = gql`
  fragment RestSearchField on Rest {
    id
    name
    adress
    img
    promoteUntil
    isPromited
  }
`;

export const CATE_FRAGMENT = gql`
  fragment CateField on Cate {
    id
    slug
    name
    img
    restaurantCount
  }
`;

export const CATE_REST_FRAGMENT = gql`
  ${REST_FRAGMENT}
  ${CATE_FRAGMENT}
  fragment CateRestField on Cate {
    ...CateField
    rest {
      ...RestSearchField
    }
  }
`;

export const DISH_FRAGMENT = gql`
  fragment DishField on Dish {
    id
    name
    price
    desc
  }
`;
