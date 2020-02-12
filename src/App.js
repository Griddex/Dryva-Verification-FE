import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import UserDrawer from "./components/AppUserDrawer";
import LoginRoute from "./Routes/Login/loginroute";
import RegisterRoute from "./Routes/Register/registerroute";
import Grid from "@material-ui/core/Grid";

function App() {
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
        <Switch>
          <Route exact path="/" component={LoginRoute} />
          <Route exact path="/login" component={LoginRoute} />
          <Route exact path="/logout" component={LoginRoute} />
          <Route
            exact
            path="/register"
            render={props => <RegisterRoute {...props} />}
          />
          <Route
            path="/verification"
            render={props => <UserDrawer {...props} />}
          />
        </Switch>
      </React.Fragment>
    </Grid>
  );
}

export default App;
