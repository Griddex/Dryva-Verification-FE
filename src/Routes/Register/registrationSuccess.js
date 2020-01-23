import React from "react";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Link from "@material-ui/core/Link";

export const RegistrationSuccess = props => {
  const { history } = props;
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <CheckBoxIcon htmlColor={"green"} style={{ fontSize: 70 }} />
      <h1>Registration Success!</h1>
      <br />
      <br />
      <Link
        onClick={() => history.push("/login")}
        style={{ cursor: "pointer" }}
        className="btn btn-secondary"
      >
        Please Login
      </Link>
    </div>
  );
};
