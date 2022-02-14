import React, { FC } from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div>
      <small className="text-red-500 font-medium">{message}</small>
    </div>
  );
};

export default ErrorMessage;
