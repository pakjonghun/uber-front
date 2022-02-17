import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rest from "../pages/client/Rest";
import NotFound from "../pages/404";
import Header from "../components/Header";
import useMe from "../hooks/useMe";
import ConfirmEmail from "../pages/user/ConfirmEmail";
import EditProfile from "../pages/user/EditProfile";
import SearchRests from "../pages/client/SearchRest";
import Cate from "../pages/client/Cate";
import RestDetail from "../pages/client/RestDetail";
import MyRest from "../pages/owner/MyRest";
import AddRest from "../pages/owner/AddRest";

const CommonRoutes = [
  { path: "confirm", element: <ConfirmEmail /> },
  { path: "profile", element: <EditProfile /> },
];

const ClientRoutes = [
  { path: "", element: <Rest /> },
  { path: "search", element: <SearchRests /> },
  { path: "cate/:slug", element: <Cate /> },
  { path: "rests/:id", element: <RestDetail /> },
];

const OwnerRoutes = [
  { path: "", element: <MyRest /> },
  { path: "/add-rest", element: <AddRest /> },
];

const LogInRouter = () => {
  const [actionFunc, { data, loading, error }] = useMe();

  useEffect(() => {
    actionFunc();
  }, [actionFunc]);

  return loading || !data || error ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          {CommonRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

          {data?.me?.role === "Client" &&
            ClientRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}

          {data?.me?.role === "Owner" &&
            OwnerRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default LogInRouter;
