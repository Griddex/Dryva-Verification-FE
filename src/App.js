import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import MiniDrawer from "./components/common/Drawer";
import LoginRoute from "./Routes/Login/loginroute";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={LoginRoute} />
        <Route exact path="/login" component={LoginRoute} />
        <Route render={props => <MiniDrawer {...props} />} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
