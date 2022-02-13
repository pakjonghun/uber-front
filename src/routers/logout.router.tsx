import React from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getIsLoggedIn } from "../apollo";
import ErrorMessage from "../components/Error";
import Login from "../pages/Login";

interface LoginFormProps {
  email: string;
  password: string;
}

const LogoutRouter = () => {
  const {
    setError,
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<LoginFormProps>({ mode: "onChange" });
  const onClick = () => {};

  const onError = (err: any) => {
    if (err?.email?.type === "b") {
      setError("email", { message: "typea error" });
    }
  };

  const onSubmit = (vars: LoginFormProps) => {
    if (isValid) {
      if (errors?.email?.type === "b") {
        setError("email", { message: "type a" });
      }
      getIsLoggedIn(true);
    }
  };
  return (
    // <div>
    //   {errors?.email?.type === "pattern" && <h1>Email pattern b </h1>}
    //   <form
    //     className="flex flex-col"
    //     onSubmit={handleSubmit(onSubmit, onError)}
    //   >
    //     <input
    //       {...register("email", {
    //         required: { value: true, message: "required" },
    //         pattern: {
    //           value: /[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[[a-zA-Z]{2,}/,
    //           message: "email plz",
    //         },
    //       })}
    //       type="text"
    //       placeholder="email"
    //     />
    //     {errors?.email?.message && (
    //       <ErrorMessage message={errors.email.message} />
    //     )}
    //     <input
    //       {...register("password")}
    //       type="password"
    //       placeholder="password"
    //     />
    //     {errors?.password?.message && (
    //       <ErrorMessage message={errors.password.message} />
    //     )}
    //     <button onClick={onClick}>LogIn</button>
    //   </form>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LogoutRouter;
