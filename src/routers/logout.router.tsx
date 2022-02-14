import React from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getIsLoggedIn } from "../apollo";
import ErrorMessage from "../components/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";

interface LoginFormProps {
  email: string;
  password: string;
}

const LogoutRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LogoutRouter;
