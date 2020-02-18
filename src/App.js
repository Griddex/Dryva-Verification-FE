import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import UserDrawer from "./components/AppUserDrawer";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Grid from "@material-ui/core/Grid";

const LandingRoute = lazy(() => import("./Routes/Landing/landingroute"));
const LoginRoute = lazy(() => import("./Routes/Login/loginroute"));
const RolesRoute = lazy(() => import("./Routes/Admin/rolesroute"));

const App = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={0}
      direction="column"
      style={{ minHeight: "100vh" }}
    >
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={RolesRoute} />
            <Route exact path="/login" component={LoginRoute} />
            <Route exact path="/logout" component={LandingRoute} />
            <ProtectedRoute
              path="/verification"
              render={props => (
                <UserDrawer roles={["Officer", "Admin"]} {...props} />
              )}
            />
          </Switch>
        </Suspense>
      </React.Fragment>
    </Grid>
  );
};

export default App;
