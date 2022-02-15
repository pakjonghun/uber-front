import { gql, useMutation, useQuery } from "@apollo/client";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { getIsLoggedIn, getToken } from "../apollo";
import Button from "../components/Button";
import ErrorMessage from "../components/Error";
import Helmet from "../components/Helmet";
import { TOKEN } from "../constants";
import { LoginMutationMutation } from "../generated/types";
import { onError } from "../utility/utility";

interface FormProps {
  email: string;
  password: string;
  error?: string;
}

const LOGIN_MUTATION = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(password: $password, email: $email) {
      isSuccess
      token
      error
    }
  }
`;

const CHECK_EMAIL = gql`
  query checkEmail($email: String!) {
    checkEmail(email: $email) {
      isSuccess
    }
  }
`;

const Login = () => {
  const location = useLocation().state;
  const { email, password } = location
    ? (location as FormProps)
    : { email: "", password: "" };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormProps>({
    mode: "onChange",
    defaultValues: {
      email,
      password,
    },
  });

  const onCompleted = (data: LoginMutationMutation) => {
    const {
      login: { isSuccess, token, error },
    } = data;
    if (isSuccess && token) {
      localStorage.setItem(TOKEN, token);
      getToken(token);
      getIsLoggedIn(true);
    } else {
      console.log(error);
      alert(error);
    }
  };

  const [loginFunc, { loading }] = useMutation<LoginMutationMutation>(
    LOGIN_MUTATION,
    {
      variables: {
        email: watch("email"),
        password: watch("password"),
      },
      onError: (err) => onError(err),
      onCompleted,
    }
  );

  const onSubmit = useCallback(() => {
    if (!loading) {
      loginFunc();
    }
  }, [loginFunc, loading]);

  const buttonProps = {
    name: "login",
    isValid,
    isLoading: loading,
  };

  return (
    <div className="h-screen">
      <Helmet title="Login" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-center max-w-screen-md py-10 px-5 mt-20 mx-auto bg-slate-50 rounded-md"
      >
        <h1 className="mx-auto font-medium text-2xl mb-5"> Uber Eats</h1>
        <h3 className="mb-3 font-semibold">Welcome back</h3>
        <small className="mb-2">
          Sign in your email adress or mobile number.
        </small>
        <input
          {...register("email", {
            required: { value: true, message: "require" },
            pattern: {
              message: "not email pattern",
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },

            validate: {
              isExist: (value) => (value.length < 10 ? "error" : true),
            },
          })}
          type="text"
          placeholder="Email"
          className="w-full px-3 py-2"
        />
        {errors.email?.message && (
          <ErrorMessage message={errors.email.message} />
        )}
        <input
          {...register("password", {
            required: { value: true, message: "required" },
          })}
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 mt-2"
        />
        {errors.password?.message && (
          <ErrorMessage message={errors.password.message} />
        )}
        <Button {...buttonProps} />
        <span className="block mx-auto mt-5">
          <span>New to Uber?</span>
          <Link to="/register" className="ml-2 text-green-500">
            Create an account
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
