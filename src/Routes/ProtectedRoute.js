import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "./../services/authService";

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  return (
    <Route {...rest}>
      {props => {
        if (!authService.IsAuthenticated)
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );

        if (roles && roles.indexOf(authService.Role) === -1)
          return (
            <Component {...props} />
            //<Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );

        return <Component {...props} />;
      }}
    </Route>
  );
};

export default ProtectedRoute;
