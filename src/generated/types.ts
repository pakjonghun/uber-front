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
  rest?: Maybe<RegisterRestOut>;
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

export type RegisterRestOut = {
  __typename?: 'RegisterRestOut';
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

export type LoginMutationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login: { __typename?: 'OutLogin', isSuccess: boolean, token?: string | null, error?: string | null } };

export type CheckEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckEmailQuery = { __typename?: 'Query', checkEmail: { __typename?: 'OutCheckEmail', isSuccess: boolean } };


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
export const CheckEmailDocument = gql`
    query checkEmail($email: String!) {
  checkEmail(email: $email) {
    isSuccess
  }
}
    `;

/**
 * __useCheckEmailQuery__
 *
 * To run a query within a React component, call `useCheckEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCheckEmailQuery(baseOptions: Apollo.QueryHookOptions<CheckEmailQuery, CheckEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckEmailQuery, CheckEmailQueryVariables>(CheckEmailDocument, options);
      }
export function useCheckEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckEmailQuery, CheckEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckEmailQuery, CheckEmailQueryVariables>(CheckEmailDocument, options);
        }
export type CheckEmailQueryHookResult = ReturnType<typeof useCheckEmailQuery>;
export type CheckEmailLazyQueryHookResult = ReturnType<typeof useCheckEmailLazyQuery>;
export type CheckEmailQueryResult = Apollo.QueryResult<CheckEmailQuery, CheckEmailQueryVariables>;