import React, { useCallback } from "react";
import Helmet from "../components/Helmet";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/Error";
import { gql, useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { OutRegister, MutationRegisterArgs, Role } from "../generated/types";
import Button from "../components/Button";
import { GraphQLError, GraphQLErrorExtensions } from "graphql";
import { onError } from "../utility/utility";

interface RegisterFormProps {
  email: string;
  password: string;
  role: Role;
}

const REGISTER_ACCOUNT = gql`
  mutation createAccount($email: String!, $password: String!, $role: Role) {
    register(role: $role, email: $email, password: $password) {
      isSuccess
    }
  }
`;

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm<RegisterFormProps>({
    mode: "onChange",
    defaultValues: { role: Role.Client },
  });

  const [registerUser, { loading, data }] = useMutation<
    { register: OutRegister },
    MutationRegisterArgs
  >(REGISTER_ACCOUNT, {
    onError: (err) => onError(err),
    onCompleted: (data) => {
      if (data.register.isSuccess) {
        navigate("/", {
          state: { email: watch("email"), password: watch("password") },
        });
      } else {
        alert(data.register.error);
      }
    },
  });

  const onSubmit = useCallback(() => {
    if (!loading) {
      registerUser({ variables: getValues() });
    }
  }, [loading, registerUser, getValues]);

  const buttonProps = { name: "Create Account", isValid, isLoading: loading };

  return (
    <div className="h-screen">
      <Helmet title="Join" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-center max-w-screen-md py-10 px-5 mt-20 mx-auto bg-slate-50 rounded-md"
      >
        <h1 className="mx-auto font-medium text-2xl mb-5"> Uber Eats</h1>
        <h3 className="mb-3 font-semibold">Let's get start</h3>
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

        <select {...register("role")} className="w-full mt-3">
          {Object.keys(Role).map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
        <Button {...buttonProps} />
        <span className="block mx-auto mt-5">
          <span>Joined to Uber?</span>
          <Link to="/" className="ml-2 text-green-500">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
