import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import OfficerDrawer from "./components/AppUserDrawer";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Grid from "@material-ui/core/Grid";
import authService from "./services/authService";

const LandingRoute = lazy(() => import("./Routes/Landing/landingroute"));
const LoginRoute = lazy(() => import("./Routes/Login/loginroute"));
const RegisterRoute = lazy(() =>
  import("./Routes/Admin/Register/registerroute")
);

const App = () => {
  const currentRole = authService().Role;
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={0}
      direction="column"
      style={{ minWidth: 800 }}
    >
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={LandingRoute} />
            <Route exact path="/login" component={LoginRoute} />
            <Route exact path="/logout" component={LandingRoute} />
            <Route exact path="/register" component={RegisterRoute} />
            <ProtectedRoute
              path={`/${currentRole}`}
              roles={["Officer", "Admin"]} //Need to store all roles in redux store on app startup
              component={OfficerDrawer}
            />
          </Switch>
        </Suspense>
      </React.Fragment>
    </Grid>
  );
};

export default App;
