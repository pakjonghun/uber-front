import React, { FC } from "react";

interface ButtonProps {
  name: string;
  isLoading: boolean;
  isValid: boolean;
}

const classOutPut = (...styleName: string[]) => styleName.join(" ");

const Button: FC<ButtonProps> = ({ name, isLoading, isValid }) => {
  console.log(isValid, !isLoading);
  return (
    <button
      className={classOutPut(
        "w-full px-3 py-1 mt-2 font-medium rounded-sm shadow-sm hover:bg-slate-300 active:bg-slate-200",
        isLoading || !isValid
          ? "bg-slate-100 pointer-events-none"
          : "bg-slate-200"
      )}
    >
      {name}
    </button>
  );
};

export default Button;
