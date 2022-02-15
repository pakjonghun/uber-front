import React from "react";
import { getIsLoggedIn } from "../apollo";
import Loading from "../components/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rest from "../pages/client/Rest";
import NotFound from "../pages/404";
import Header from "../components/Header";
import useMe from "../hooks/useMe";
import ConfirmEmail from "../pages/user/ConfirmEmail";
import EditProfile from "../pages/user/EditProfile";

const ClientRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="" element={<Rest />} />
        <Route path="confirm">
          <Route path="" element={<ConfirmEmail />} />
        </Route>
        <Route path="profile" element={<EditProfile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

const LogInRouter = () => {
  const { data, loading, error } = useMe();

  return loading || !data || error ? (
    <Loading />
  ) : (
    <BrowserRouter>
      {data.me?.role === "Client" && <ClientRouter />}
    </BrowserRouter>
  );
};

export default LogInRouter;
