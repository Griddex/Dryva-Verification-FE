import React from "react";
import "./App.css";
import LoginRoute from "./Routes/Login/loginroute";
import VehicleRoute from "./Routes/Vehicle/vehicleroute";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginRoute} />
      <Route exact path="/login" component={LoginRoute} />
      <Route exact path="/vehicle" component={VehicleRoute} />
    </Switch>
  );
}

export default App;
