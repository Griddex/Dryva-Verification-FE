import React from "react";
import { connect } from "react-redux";
import decodeJwt from "jwt-decode";

const authService = props => {
  const { authStatus } = props;
  const token = localStorage.getItem("token");
  const identity = decodeJwt(token);
  const role = identity.role;
  console.log("Logged output -->: identity", identity);
  return { IsAthenticated: authStatus, Role: role };
};

const mapStateToProps = state => {
  return {
    authStatus: state.userReducer.IsAthenticated
  };
};

export default connect(mapStateToProps, null)(authService);
