import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

// import Layout from './Layout'
import PrivateRoute from "./PrivateRoute";
import BasicIndex from "../layouts/BasicIndex";
import Login from "../pages/Platform/Account/Login";

// 配置路由
function AppRouter({ logged }: { logged?: boolean }) {
  useEffect(() => {
    // console.log(bgColor);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route component={BasicIndex} exact /> */}
        <PrivateRoute isAuthenticated={logged || true} component={BasicIndex} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
