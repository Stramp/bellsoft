import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./RoutePaths.jsx";
import { NotFound } from "./NotFound.jsx";
import { Layout } from "./Layout.jsx";
import { Home } from "../pages/home/Home.jsx";
import { Login } from "../pages/login/Login.jsx";
import { Create } from "../pages/create/Create.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <div className="bg-p-header bg-right bg-no-repeat h-35 w-full"></div>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.LOGIN}
      element={
        <Layout>
         
          <Login />
        
        </Layout>
      }
    />
    <Route
      path={RoutePaths.CREATE}
      element={
        <Layout>
         
          <Create />
        
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
