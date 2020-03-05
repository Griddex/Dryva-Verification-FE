import React from "react";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import authService from "./../../../services/authService";

export const RegistrationSuccess = props => {
  const currentRole = authService().Role;
  const { history } = props;

  return (
    <Grid
      container
      style={{ width: "50%", margin: "0 auto", alignItems: "center" }}
    >
      <CheckBoxIcon htmlColor={"green"} style={{ fontSize: 70 }} />
      <h1>Registration Success!</h1>
      <br />
      <br />
      <Button
        onClick={() => history.replace(`/Auth/register`)}
        style={{ cursor: "pointer" }}
        variant="outlined"
      >
        Register Another...
      </Button>
    </Grid>
  );
};
export default RegistrationSuccess;
