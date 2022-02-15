import React, { useEffect } from "react";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { VerifyMutation } from "../../generated/types";
import { onError } from "../../utility/utility";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useMe from "../../hooks/useMe";
import { idText } from "typescript";

const VERIFYMUTATION = gql`
  mutation verify($code: String!) {
    verifyEmail(code: $code) {
      isSuccess
      error
    }
  }
`;

const ConfirmEmail = () => {
  const client = useApolloClient();
  const { data: me } = useMe();
  const nav = useNavigate();
  const code = window.location.href.split("code=")[1];
  const [verifyFunc, { loading }] = useMutation<VerifyMutation>(
    VERIFYMUTATION,
    {
      variables: { code },
      onError: (error) => {
        onError(error);
        nav("/");
      },
      onCompleted: (data) => {
        const { isSuccess } = data.verifyEmail;

        if (isSuccess && me?.me?.id) {
          client.writeFragment({
            id: `Users:${me.me.id}`,
            fragment: gql`
              fragment ChangeVerifyed on Users {
                isEmailVerified
              }
            `,
            data: {
              isEmailVerified: true,
            },
          });
        } else {
          alert(data.verifyEmail.error?.toString());
        }

        nav("/");
      },
    }
  );

  useEffect(() => {
    verifyFunc();
  }, [verifyFunc]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen space-y-3">
        <h1 className="-mt-[20%] font-bold text-2xl">Now verifying email</h1>
        <h3 className="text-lg"> wait a minute plz</h3>
      </div>
    );
  }

  return <Navigate replace to="/" />;
};

export default ConfirmEmail;
