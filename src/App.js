import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import OfficerDrawer from "./components/AppUserDrawer";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Grid from "@material-ui/core/Grid";
import ReactLoading from "react-loading";

const LandingRoute = lazy(() => import("./Routes/Landing/landingroute"));
const LoginRoute = lazy(() => import("./Routes/Login/loginroute"));
const RegisterRoute = lazy(() =>
  import("./Routes/Admin/Register/registerroute")
);

const App = () => {
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
        <Suspense fallback={<ReactLoading type={"Spin"} color="#006992" />}>
          <Switch>
            <Route exact path="/" component={LandingRoute} />
            <Route exact path="/login" component={LoginRoute} />
            <Route exact path="/logout" component={LandingRoute} />
            <ProtectedRoute
              path={`/Auth`}
              roles={["Officer", "Admin"]}
              component={OfficerDrawer}
            />
          </Switch>
        </Suspense>
      </React.Fragment>
    </Grid>
  );
};

export default App;
