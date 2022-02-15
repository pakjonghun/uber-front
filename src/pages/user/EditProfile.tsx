import { gql, useApolloClient, useMutation } from "@apollo/client";
import React, { useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import ErrorMessage from "../../components/Error";
import { EditProfileMutation } from "../../generated/types";
import useMe from "../../hooks/useMe";
import { onError } from "../../utility/utility";

interface EditProfileFormProps {
  email?: string;
  password?: string;
}

const EDITPROFILE_MUTATION = gql`
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

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<EditProfileFormProps>({ mode: "onChange" });

  const { data: me, refetch } = useMe();
  const nav = useNavigate();
  const client = useApolloClient();
  const [editFunc, { loading, error }] = useMutation<EditProfileMutation>(
    EDITPROFILE_MUTATION,
    {
      onError: (err) => {
        onError(err);
        nav("/profile");
      },
      onCompleted: async (data) => {
        const { isSuccess } = data.update;
        const email = watch("email");
        await refetch();
        // if (isSuccess && me?.me && email) {
        //   client.writeFragment({
        //     id: `Users:${me.me.id}`,
        //     fragment: gql`
        //       fragment EditEmail on Users {
        //         email
        //         isEmailVerified
        //       }
        //     `,
        //     data: {
        //       email,
        //       isEmailVerified: false,
        //     },
        //   });

        nav("/");
      },
    }
  );

  const onSubmit = useCallback(
    (variables: EditProfileFormProps) => {
      if (!loading) {
        editFunc({ variables });
      }
    },
    [loading, editFunc]
  );

  const buttonProps = {
    name: "Edit",
    isLoading: loading,
    isValid: isValid,
  };

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  console.log(error);

  return (
    <div className="h-screen">
      <Helmet title="EditProfile" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-center max-w-screen-md py-10 px-5 mt-20 mx-auto bg-slate-50 rounded-md"
      >
        <h1 className="mx-auto font-medium text-2xl mb-5"> Edit Profile</h1>
        <h3 className="mb-3 font-semibold">Input edit profile info</h3>
        <small className="mb-2">
          Input edit profile info and Click edit button
        </small>
        <input
          {...register("email", {
            pattern: {
              message: "not email pattern",
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
            minLength: { value: 2, message: "minLength = 5" },
            validate: (value) =>
              (value && value?.trim().length > 0) || "invalid",
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
          <span>Don't want to change info?</span>
          <Link to="/" className="ml-2 text-green-500">
            Home
          </Link>
        </span>
      </form>
    </div>
  );
};

export default EditProfile;
