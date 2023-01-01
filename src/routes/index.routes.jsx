import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import PublicRoutes from "./public.routes";
import { PATHS } from "../configs/routes.config";

const Home = React.lazy(() => import("../pages/home/home.page"));
const ErrorPage = React.lazy(() => import("../pages/404-error/error.page"));

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ERROR_PAGE} element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
