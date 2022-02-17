import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Cate = {
  __typename?: 'Cate';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  img?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  rest: Array<Rest>;
  restaurantCount: Scalars['Int'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Dish = {
  __typename?: 'Dish';
  createdAt: Scalars['DateTime'];
  desc?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  img?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  options?: Maybe<Array<DishOptions>>;
  price: Scalars['Int'];
  rest: Rest;
  updatedAt: Scalars['DateTime'];
};

export type DishChoice = {
  __typename?: 'DishChoice';
  extra?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type DishChoiceInputType = {
  extra?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type DishInput = {
  dishId: Scalars['Int'];
  options?: InputMaybe<DishOptionsInputTypes>;
};

export type DishInputTypes = {
  desc?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  options?: InputMaybe<Array<DishOptionsInputType>>;
  price: Scalars['Int'];
  rest: RestInputType;
};

export type DishOptions = {
  __typename?: 'DishOptions';
  choices?: Maybe<Array<DishChoice>>;
  extra?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type DishOptionsInputType = {
  choices?: InputMaybe<Array<DishChoiceInputType>>;
  extra?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type DishOptionsInputTypes = {
  choice?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type EditDish = {
  desc?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<DishOptionsInputType>>;
  price?: InputMaybe<Scalars['Int']>;
};

export type FindAllCate = {
  __typename?: 'FindAllCate';
  data?: Maybe<Array<Cate>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addDriver: OutAddDriverDto;
  createDish: OutCreateDish;
  createOrder: OutCreateOrder;
  createPay: OutCreatePay;
  createRest: OutRegisterRest;
  deleteDish: OutDeleteDish;
  deleteRest: OutDelete;
  editDish: OutEditDish;
  editOrder: OutEditOrder;
  login: OutLogin;
  logout?: Maybe<Users>;
  read: Scalars['Int'];
  register: OutRegister;
  update: OutUpdate;
  updateRest: OutRestUpdate;
  verifyEmail: OutVerify;
};


export type MutationAddDriverArgs = {
  id: Scalars['Float'];
};


export type MutationCreateDishArgs = {
  desc?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  options?: InputMaybe<Array<DishOptionsInputType>>;
  price: Scalars['Int'];
  restId: Scalars['Float'];
};


export type MutationCreateOrderArgs = {
  dishs?: InputMaybe<Array<DishInput>>;
  restId: Scalars['Int'];
};


export type MutationCreatePayArgs = {
  restId: Scalars['Int'];
  transactionId: Scalars['String'];
};


export type MutationCreateRestArgs = {
  args: RegisterRestDto;
};


export type MutationDeleteDishArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteRestArgs = {
  id: Scalars['Int'];
};


export type MutationEditDishArgs = {
  dish: EditDish;
  dishId: Scalars['Int'];
};


export type MutationEditOrderArgs = {
  id: Scalars['Float'];
  status: OrderStatus;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationReadArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  customOrders?: InputMaybe<Array<OrderInputType>>;
  deliveryOrders?: InputMaybe<Array<OrderInputType>>;
  email: Scalars['String'];
  isEmailVerified?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  pay?: InputMaybe<Array<PayInputType>>;
  role?: InputMaybe<Role>;
};


export type MutationUpdateArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
};


export type MutationUpdateRestArgs = {
  id: Scalars['Float'];
  rest?: InputMaybe<NewRest>;
};


export type MutationVerifyEmailArgs = {
  code: Scalars['String'];
};

export type NewRest = {
  adress?: InputMaybe<Scalars['String']>;
  cateName?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type OrderEntity = {
  __typename?: 'OrderEntity';
  client?: Maybe<Users>;
  createdAt: Scalars['DateTime'];
  driver?: Maybe<Users>;
  id: Scalars['Float'];
  orderItems: Array<OrderItem>;
  rest: Rest;
  status: OrderStatus;
  total?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
};

export type OrderInputType = {
  client?: InputMaybe<InputTypeUserss>;
  driver?: InputMaybe<InputTypeUserss>;
  orderItems: Array<OrderItemInputType>;
  rest: RestInputType;
  status: OrderStatus;
  total?: InputMaybe<Scalars['Float']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime'];
  dish: Dish;
  id: Scalars['Float'];
  options?: Maybe<Array<OrderOption>>;
  updatedAt: Scalars['DateTime'];
};

export type OrderOption = {
  __typename?: 'OrderOption';
  choice?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum OrderStatus {
  Complish = 'complish',
  Cooked = 'cooked',
  Cooking = 'cooking',
  Delivery = 'delivery',
  Pending = 'pending'
}

export type OutAddDriverDto = {
  __typename?: 'OutAddDriverDto';
  data?: Maybe<OrderEntity>;
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type OutCheckEmail = {
  __typename?: 'OutCheckEmail';
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type OutCreateDish = {
  __typename?: 'OutCreateDish';
  data?: Maybe<Dish>;
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type OutCreateOrder = {
  __typename?: 'OutCreateOrder';
  data?: Maybe<OrderEntity>;
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type OutCreatePay = {
  __typename?: 'OutCreatePay';
  data?: Maybe<Pay>;
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type OutDelete = {
  __typename?: 'OutDelete';
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
  rest?: Maybe<Rest>;
};

export type OutDeleteDish = {
  __typename?: 'OutDeleteDish';
  dish?: Maybe<Dish>;
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type OutEditDish = {
  __typename?: 'OutEditDish';
  dish?: Maybe<Dish>;
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type OutEditOrder = {
  __typename?: 'OutEditOrder';
  data: OrderEntity;
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type OutFindAll = {
  __typename?: 'OutFindAll';
  createdAt: Scalars['DateTime'];
  customOrders?: Maybe<Array<OrderEntity>>;
  deliveryOrders?: Maybe<Array<OrderEntity>>;
  email: Scalars['String'];
  id: Scalars['Float'];
  isEmailVerified: Scalars['Boolean'];
  pay?: Maybe<Array<Pay>>;
  rest: Array<Rest>;
  role: Role;
  updatedAt: Scalars['DateTime'];
};

export type OutFindOneCate = {
  __typename?: 'OutFindOneCate';
  date?: Maybe<Cate>;
  rest?: Maybe<Array<Rest>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type OutFindPays = {
  __typename?: 'OutFindPays';
  data?: Maybe<Array<Pay>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type OutFindRestDto = {
  __typename?: 'OutFindRestDto';
  data?: Maybe<Array<Rest>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type OutGetOrder = {
  __typename?: 'OutGetOrder';
  client?: Maybe<Users>;
  createdAt: Scalars['DateTime'];
  driver?: Maybe<Users>;
  id: Scalars['Float'];
  orderItems: Array<OrderItem>;
  rest: Rest;
  status: OrderStatus;
  total?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
};

export type OutGetOrders = {
  __typename?: 'OutGetOrders';
  data: Array<OrderEntity>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type OutLogin = {
  __typename?: 'OutLogin';
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type OutMyRest = {
  __typename?: 'OutMyRest';
  rest?: Maybe<Array<Rest>>;
};

export type OutProfile = {
  __typename?: 'OutProfile';
  email: Scalars['String'];
  role: Role;
};

export type OutRegister = {
  __typename?: 'OutRegister';
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
  user: User;
};

export type OutRegisterRest = {
  __typename?: 'OutRegisterRest';
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
  rest?: Maybe<Rest>;
};

export type OutRestSestch = {
  __typename?: 'OutRestSestch';
  data?: Maybe<Array<Rest>>;
  totalPages?: Maybe<Scalars['Int']>;
  totalResults?: Maybe<Scalars['Int']>;
};

export type OutRestUpdate = {
  __typename?: 'OutRestUpdate';
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
  rest?: Maybe<Rest>;
};

export type OutUpdate = {
  __typename?: 'OutUpdate';
  UpdatedUser?: Maybe<UpdatedUser>;
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type OutVerify = {
  __typename?: 'OutVerify';
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
};

export type Pay = {
  __typename?: 'Pay';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  price?: Maybe<Scalars['Float']>;
  rest: Rest;
  restId: Scalars['Int'];
  transactionId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: Users;
};

export type Query = {
  __typename?: 'Query';
  checkEmail: OutCheckEmail;
  findAll: Array<OutFindAll>;
  findAllCate: FindAllCate;
  findOneCate: OutFindOneCate;
  findPays: OutFindPays;
  findRestById: Rest;
  findRests: OutFindRestDto;
  getOrder: OutGetOrder;
  getOrders: OutGetOrders;
  me?: Maybe<Users>;
  myRest: OutMyRest;
  profile: OutProfile;
  searchRest: OutRestSestch;
};


export type QueryCheckEmailArgs = {
  email: Scalars['String'];
};


export type QueryFindAllCateArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryFindOneCateArgs = {
  page?: InputMaybe<Scalars['Int']>;
  slug: Scalars['String'];
};


export type QueryFindPaysArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryFindRestByIdArgs = {
  id: Scalars['Float'];
};


export type QueryFindRestsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetOrdersArgs = {
  page?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<OrderStatus>;
};


export type QueryProfileArgs = {
  id: Scalars['Float'];
};


export type QuerySearchRestArgs = {
  page?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
};

export type RegisterRestDto = {
  adress?: InputMaybe<Scalars['String']>;
  cateName?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Rest = {
  __typename?: 'Rest';
  adress: Scalars['String'];
  cate?: Maybe<Cate>;
  createdAt: Scalars['DateTime'];
  dish: Array<Dish>;
  id: Scalars['Float'];
  img?: Maybe<Scalars['String']>;
  isPromited: Scalars['Boolean'];
  name: Scalars['String'];
  order?: Maybe<Array<OrderEntity>>;
  owner: Users;
  ownerName: Scalars['String'];
  pay?: Maybe<Array<Pay>>;
  promoteUntil?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export enum Role {
  Client = 'Client',
  Delevery = 'Delevery',
  Owner = 'Owner'
}

export type Subscription = {
  __typename?: 'Subscription';
  cookedOrder: OrderEntity;
  cookingOrder: OrderEntity;
  pendingOrder: OrderEntity;
  updateOrder: OrderEntity;
};


export type SubscriptionUpdateOrderArgs = {
  id: Scalars['Float'];
};

export type UpdatedUser = {
  __typename?: 'UpdatedUser';
  email: Scalars['String'];
  role: Role;
};

export type User = {
  __typename?: 'User';
  customOrders?: Maybe<Array<OrderEntity>>;
  deliveryOrders?: Maybe<Array<OrderEntity>>;
  email: Scalars['String'];
  id: Scalars['Float'];
  isEmailVerified: Scalars['Boolean'];
  pay?: Maybe<Array<Pay>>;
  rest: Array<Rest>;
  role: Role;
};

export type Users = {
  __typename?: 'Users';
  createdAt: Scalars['DateTime'];
  customOrders?: Maybe<Array<OrderEntity>>;
  deliveryOrders?: Maybe<Array<OrderEntity>>;
  email: Scalars['String'];
  id: Scalars['Float'];
  isEmailVerified: Scalars['Boolean'];
  password: Scalars['String'];
  pay?: Maybe<Array<Pay>>;
  rest: Array<Rest>;
  role: Role;
  updatedAt: Scalars['DateTime'];
};

export type CateInputType = {
  img?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  rest: Array<RestInputType>;
  slug: Scalars['String'];
};

export type InputTypeUserss = {
  customOrders?: InputMaybe<Array<OrderInputType>>;
  deliveryOrders?: InputMaybe<Array<OrderInputType>>;
  email: Scalars['String'];
  isEmailVerified?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  pay?: InputMaybe<Array<PayInputType>>;
  rest: Array<RestInputType>;
  role?: InputMaybe<Role>;
};

export type OrderItemInputType = {
  dish: DishInputTypes;
  options?: InputMaybe<Array<DishOptionsInputTypes>>;
};

export type PayInputType = {
  price?: InputMaybe<Scalars['Float']>;
  rest: RestInputType;
  restId: Scalars['Int'];
  transactionId: Scalars['String'];
  user: InputTypeUserss;
};

export type RestInputType = {
  adress: Scalars['String'];
  cate?: InputMaybe<CateInputType>;
  dish: Array<DishInputTypes>;
  img?: InputMaybe<Scalars['String']>;
  isPromited?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  order?: InputMaybe<Array<OrderInputType>>;
  owner: InputTypeUserss;
  pay?: InputMaybe<Array<PayInputType>>;
  promoteUntil?: InputMaybe<Scalars['DateTime']>;
};

export type RestSearchFieldFragment = { __typename?: 'Rest', id: number, name: string, adress: string, img?: string | null, promoteUntil?: any | null, isPromited: boolean };

export type CateFieldFragment = { __typename?: 'Cate', id: number, slug: string, name: string, img?: string | null, restaurantCount: number };

export type CateRestFieldFragment = { __typename?: 'Cate', id: number, slug: string, name: string, img?: string | null, restaurantCount: number, rest: Array<{ __typename?: 'Rest', id: number, name: string, adress: string, img?: string | null, promoteUntil?: any | null, isPromited: boolean }> };

export type DishFieldFragment = { __typename?: 'Dish', id: number, name: string, price: number, desc?: string | null };

export type RestsQueryVariables = Exact<{
  restPage?: InputMaybe<Scalars['Int']>;
}>;


export type RestsQuery = { __typename?: 'Query', findRests: { __typename?: 'OutFindRestDto', totalPages?: number | null, totalResults?: number | null, data?: Array<{ __typename?: 'Rest', id: number, name: string, adress: string, img?: string | null, promoteUntil?: any | null, isPromited: boolean }> | null } };

export type FindAllCateQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
}>;


export type FindAllCateQuery = { __typename?: 'Query', findAllCate: { __typename?: 'FindAllCate', totalPages?: number | null, totalResults?: number | null, data?: Array<{ __typename?: 'Cate', id: number, slug: string, name: string, img?: string | null, restaurantCount: number }> | null } };

export type FindOneCateQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  slug: Scalars['String'];
}>;


export type FindOneCateQuery = { __typename?: 'Query', findOneCate: { __typename?: 'OutFindOneCate', totalPages?: number | null, totalResults?: number | null, date?: { __typename?: 'Cate', id: number, slug: string, name: string, img?: string | null, restaurantCount: number } | null, rest?: Array<{ __typename?: 'Rest', id: number, name: string, adress: string, img?: string | null, promoteUntil?: any | null, isPromited: boolean }> | null } };

export type SearchRestQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  term: Scalars['String'];
}>;


export type SearchRestQuery = { __typename?: 'Query', searchRest: { __typename?: 'OutRestSestch', totalPages?: number | null, totalResults?: number | null, data?: Array<{ __typename?: 'Rest', id: number, name: string, adress: string, img?: string | null, promoteUntil?: any | null, isPromited: boolean }> | null } };

export type FindRestByIdQueryVariables = Exact<{
  id: Scalars['Float'];
}>;


export type FindRestByIdQuery = { __typename?: 'Query', findRestById: { __typename?: 'Rest', id: number, name: string, adress: string, img?: string | null, promoteUntil?: any | null, isPromited: boolean, cate?: { __typename?: 'Cate', id: number, slug: string, name: string, img?: string | null, restaurantCount: number } | null, dish: Array<{ __typename?: 'Dish', id: number, name: string, desc?: string | null, img?: string | null }> } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: { __typename?: 'Users', id: number } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'Users', id: number, email: string, role: Role, isEmailVerified: boolean } | null };

export type LoginMutationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'OutLogin', isSuccess: boolean, token?: string | null, error?: string | null } };

export type CreateAccountMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Role>;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', register: { __typename?: 'OutRegister', isSuccess: boolean, error?: string | null } };

export type MyRestQueryVariables = Exact<{ [key: string]: never; }>;


export type MyRestQuery = { __typename?: 'Query', myRest: { __typename?: 'OutMyRest', rest?: Array<{ __typename?: 'Rest', id: number, name: string, adress: string, img?: string | null, promoteUntil?: any | null, isPromited: boolean, dish: Array<{ __typename?: 'Dish', id: number, name: string, price: number, desc?: string | null }> }> | null } };

export type CreateRestMutationVariables = Exact<{
  args: RegisterRestDto;
}>;


export type CreateRestMutation = { __typename?: 'Mutation', createRest: { __typename?: 'OutRegisterRest', isSuccess: boolean, error?: string | null, rest?: { __typename?: 'Rest', id: number, name: string, adress: string, img?: string | null, promoteUntil?: any | null, isPromited: boolean } | null } };

export type VerifyMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type VerifyMutation = { __typename?: 'Mutation', verifyEmail: { __typename?: 'OutVerify', isSuccess: boolean, error?: string | null } };

export type ChangeVerifyedFragment = { __typename?: 'Users', isEmailVerified: boolean };

export type EditProfileMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type EditProfileMutation = { __typename?: 'Mutation', update: { __typename?: 'OutUpdate', isSuccess: boolean, UpdatedUser?: { __typename?: 'UpdatedUser', email: string, role: Role } | null } };

export type EditEmailFragment = { __typename?: 'Users', email: string, isEmailVerified: boolean };

export const CateFieldFragmentDoc = gql`
    fragment CateField on Cate {
  id
  slug
  name
  img
  restaurantCount
}
    `;
export const RestSearchFieldFragmentDoc = gql`
    fragment RestSearchField on Rest {
  id
  name
  adress
  img
  promoteUntil
  isPromited
}
    `;
export const CateRestFieldFragmentDoc = gql`
    fragment CateRestField on Cate {
  ...CateField
  rest {
    ...RestSearchField
  }
}
    ${CateFieldFragmentDoc}
${RestSearchFieldFragmentDoc}`;
export const DishFieldFragmentDoc = gql`
    fragment DishField on Dish {
  id
  name
  price
  desc
}
    `;
export const ChangeVerifyedFragmentDoc = gql`
    fragment ChangeVerifyed on Users {
  isEmailVerified
}
    `;
export const EditEmailFragmentDoc = gql`
    fragment EditEmail on Users {
  email
  isEmailVerified
}
    `;
export const RestsDocument = gql`
    query rests($restPage: Int) {
  findRests(page: $restPage) {
    data {
      ...RestSearchField
    }
    totalPages
    totalResults
  }
}
    ${RestSearchFieldFragmentDoc}`;

/**
 * __useRestsQuery__
 *
 * To run a query within a React component, call `useRestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestsQuery({
 *   variables: {
 *      restPage: // value for 'restPage'
 *   },
 * });
 */
export function useRestsQuery(baseOptions?: Apollo.QueryHookOptions<RestsQuery, RestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RestsQuery, RestsQueryVariables>(RestsDocument, options);
      }
export function useRestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestsQuery, RestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RestsQuery, RestsQueryVariables>(RestsDocument, options);
        }
export type RestsQueryHookResult = ReturnType<typeof useRestsQuery>;
export type RestsLazyQueryHookResult = ReturnType<typeof useRestsLazyQuery>;
export type RestsQueryResult = Apollo.QueryResult<RestsQuery, RestsQueryVariables>;
export const FindAllCateDocument = gql`
    query FindAllCate($page: Int) {
  findAllCate(page: $page) {
    data {
      ...CateField
    }
    totalPages
    totalResults
  }
}
    ${CateFieldFragmentDoc}`;

/**
 * __useFindAllCateQuery__
 *
 * To run a query within a React component, call `useFindAllCateQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCateQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useFindAllCateQuery(baseOptions?: Apollo.QueryHookOptions<FindAllCateQuery, FindAllCateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllCateQuery, FindAllCateQueryVariables>(FindAllCateDocument, options);
      }
export function useFindAllCateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllCateQuery, FindAllCateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllCateQuery, FindAllCateQueryVariables>(FindAllCateDocument, options);
        }
export type FindAllCateQueryHookResult = ReturnType<typeof useFindAllCateQuery>;
export type FindAllCateLazyQueryHookResult = ReturnType<typeof useFindAllCateLazyQuery>;
export type FindAllCateQueryResult = Apollo.QueryResult<FindAllCateQuery, FindAllCateQueryVariables>;
export const FindOneCateDocument = gql`
    query findOneCate($page: Int, $slug: String!) {
  findOneCate(page: $page, slug: $slug) {
    totalPages
    totalResults
    date {
      ...CateField
    }
    rest {
      ...RestSearchField
    }
  }
}
    ${CateFieldFragmentDoc}
${RestSearchFieldFragmentDoc}`;

/**
 * __useFindOneCateQuery__
 *
 * To run a query within a React component, call `useFindOneCateQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneCateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneCateQuery({
 *   variables: {
 *      page: // value for 'page'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useFindOneCateQuery(baseOptions: Apollo.QueryHookOptions<FindOneCateQuery, FindOneCateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneCateQuery, FindOneCateQueryVariables>(FindOneCateDocument, options);
      }
export function useFindOneCateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneCateQuery, FindOneCateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneCateQuery, FindOneCateQueryVariables>(FindOneCateDocument, options);
        }
export type FindOneCateQueryHookResult = ReturnType<typeof useFindOneCateQuery>;
export type FindOneCateLazyQueryHookResult = ReturnType<typeof useFindOneCateLazyQuery>;
export type FindOneCateQueryResult = Apollo.QueryResult<FindOneCateQuery, FindOneCateQueryVariables>;
export const SearchRestDocument = gql`
    query searchRest($page: Int, $term: String!) {
  searchRest(page: $page, term: $term) {
    totalPages
    totalResults
    data {
      ...RestSearchField
    }
  }
}
    ${RestSearchFieldFragmentDoc}`;

/**
 * __useSearchRestQuery__
 *
 * To run a query within a React component, call `useSearchRestQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRestQuery({
 *   variables: {
 *      page: // value for 'page'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useSearchRestQuery(baseOptions: Apollo.QueryHookOptions<SearchRestQuery, SearchRestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRestQuery, SearchRestQueryVariables>(SearchRestDocument, options);
      }
export function useSearchRestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRestQuery, SearchRestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRestQuery, SearchRestQueryVariables>(SearchRestDocument, options);
        }
export type SearchRestQueryHookResult = ReturnType<typeof useSearchRestQuery>;
export type SearchRestLazyQueryHookResult = ReturnType<typeof useSearchRestLazyQuery>;
export type SearchRestQueryResult = Apollo.QueryResult<SearchRestQuery, SearchRestQueryVariables>;
export const FindRestByIdDocument = gql`
    query findRestById($id: Float!) {
  findRestById(id: $id) {
    ...RestSearchField
    cate {
      ...CateField
    }
    dish {
      id
      name
      desc
      img
    }
  }
}
    ${RestSearchFieldFragmentDoc}
${CateFieldFragmentDoc}`;

/**
 * __useFindRestByIdQuery__
 *
 * To run a query within a React component, call `useFindRestByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRestByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRestByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindRestByIdQuery(baseOptions: Apollo.QueryHookOptions<FindRestByIdQuery, FindRestByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRestByIdQuery, FindRestByIdQueryVariables>(FindRestByIdDocument, options);
      }
export function useFindRestByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRestByIdQuery, FindRestByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRestByIdQuery, FindRestByIdQueryVariables>(FindRestByIdDocument, options);
        }
export type FindRestByIdQueryHookResult = ReturnType<typeof useFindRestByIdQuery>;
export type FindRestByIdLazyQueryHookResult = ReturnType<typeof useFindRestByIdLazyQuery>;
export type FindRestByIdQueryResult = Apollo.QueryResult<FindRestByIdQuery, FindRestByIdQueryVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout {
    id
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    email
    role
    isEmailVerified
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LoginMutationDocument = gql`
    mutation loginMutation($email: String!, $password: String!) {
  login(password: $password, email: $email) {
    isSuccess
    token
    error
  }
}
    `;
export type LoginMutationMutationFn = Apollo.MutationFunction<LoginMutationMutation, LoginMutationMutationVariables>;

/**
 * __useLoginMutationMutation__
 *
 * To run a mutation, you first call `useLoginMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutationMutation, { data, loading, error }] = useLoginMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutationMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutationMutation, LoginMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutationMutation, LoginMutationMutationVariables>(LoginMutationDocument, options);
      }
export type LoginMutationMutationHookResult = ReturnType<typeof useLoginMutationMutation>;
export type LoginMutationMutationResult = Apollo.MutationResult<LoginMutationMutation>;
export type LoginMutationMutationOptions = Apollo.BaseMutationOptions<LoginMutationMutation, LoginMutationMutationVariables>;
export const CreateAccountDocument = gql`
    mutation createAccount($email: String!, $password: String!, $role: Role) {
  register(role: $role, email: $email, password: $password) {
    isSuccess
    error
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const MyRestDocument = gql`
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
    ${RestSearchFieldFragmentDoc}
${DishFieldFragmentDoc}`;

/**
 * __useMyRestQuery__
 *
 * To run a query within a React component, call `useMyRestQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyRestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyRestQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyRestQuery(baseOptions?: Apollo.QueryHookOptions<MyRestQuery, MyRestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyRestQuery, MyRestQueryVariables>(MyRestDocument, options);
      }
export function useMyRestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyRestQuery, MyRestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyRestQuery, MyRestQueryVariables>(MyRestDocument, options);
        }
export type MyRestQueryHookResult = ReturnType<typeof useMyRestQuery>;
export type MyRestLazyQueryHookResult = ReturnType<typeof useMyRestLazyQuery>;
export type MyRestQueryResult = Apollo.QueryResult<MyRestQuery, MyRestQueryVariables>;
export const CreateRestDocument = gql`
    mutation createRest($args: RegisterRestDto!) {
  createRest(args: $args) {
    isSuccess
    error
    rest {
      ...RestSearchField
    }
  }
}
    ${RestSearchFieldFragmentDoc}`;
export type CreateRestMutationFn = Apollo.MutationFunction<CreateRestMutation, CreateRestMutationVariables>;

/**
 * __useCreateRestMutation__
 *
 * To run a mutation, you first call `useCreateRestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRestMutation, { data, loading, error }] = useCreateRestMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateRestMutation(baseOptions?: Apollo.MutationHookOptions<CreateRestMutation, CreateRestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRestMutation, CreateRestMutationVariables>(CreateRestDocument, options);
      }
export type CreateRestMutationHookResult = ReturnType<typeof useCreateRestMutation>;
export type CreateRestMutationResult = Apollo.MutationResult<CreateRestMutation>;
export type CreateRestMutationOptions = Apollo.BaseMutationOptions<CreateRestMutation, CreateRestMutationVariables>;
export const VerifyDocument = gql`
    mutation verify($code: String!) {
  verifyEmail(code: $code) {
    isSuccess
    error
  }
}
    `;
export type VerifyMutationFn = Apollo.MutationFunction<VerifyMutation, VerifyMutationVariables>;

/**
 * __useVerifyMutation__
 *
 * To run a mutation, you first call `useVerifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyMutation, { data, loading, error }] = useVerifyMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useVerifyMutation(baseOptions?: Apollo.MutationHookOptions<VerifyMutation, VerifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyMutation, VerifyMutationVariables>(VerifyDocument, options);
      }
export type VerifyMutationHookResult = ReturnType<typeof useVerifyMutation>;
export type VerifyMutationResult = Apollo.MutationResult<VerifyMutation>;
export type VerifyMutationOptions = Apollo.BaseMutationOptions<VerifyMutation, VerifyMutationVariables>;
export const EditProfileDocument = gql`
    mutation editProfile($email: String, $password: String) {
  update(email: $email, password: $password) {
    isSuccess
    UpdatedUser {
      email
      role
    }
  }
}
    `;
export type EditProfileMutationFn = Apollo.MutationFunction<EditProfileMutation, EditProfileMutationVariables>;

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useEditProfileMutation(baseOptions?: Apollo.MutationHookOptions<EditProfileMutation, EditProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditProfileMutation, EditProfileMutationVariables>(EditProfileDocument, options);
      }
export type EditProfileMutationHookResult = ReturnType<typeof useEditProfileMutation>;
export type EditProfileMutationResult = Apollo.MutationResult<EditProfileMutation>;
export type EditProfileMutationOptions = Apollo.BaseMutationOptions<EditProfileMutation, EditProfileMutationVariables>;