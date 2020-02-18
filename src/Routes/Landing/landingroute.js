import React, { Fragment } from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import history from "./../../services/historyService";

function LandingRoute(props) {
  const useStyles = makeStyles(theme => ({
    "@global": { body: { backgroundColor: "#FFF" } },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(5)
    },
    error: { color: "red" }
  }));

  const classes = useStyles();

  return (
    <div>
      <Logo />
      <h1>Welcome to Dryva's Driver Verification</h1>
      <br />
      <Button
        onClick={() => history.push("/login")}
        style={{ cursor: "pointer" }}
        className="btn btn-secondary"
        width={800}
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </div>
  );
}

export default LandingRoute;
