import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

// import Layout from './Layout'
// import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Platform/Account/Login";
import routes from "./path";

// 配置路由
function AppRouter({ logged }: { logged?: boolean }) {
  useEffect(() => {
    // console.log(routes); 
  });

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} /> 
        {/* <Route component={BasicIndex} exact /> */}
        {/* <PrivateRoute isAuthenticated={logged || true} component={BasicIndex} /> */}
        {routes.map((route:any) => (
          <Route key={route.path} path={route.path} component={route.layoutComponent} exact />
        ))}
        <Redirect to='/platform' />
      </Switch>
    </Router>
  );
}

export default AppRouter;
