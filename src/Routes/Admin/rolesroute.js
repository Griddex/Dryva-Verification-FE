import React from "react";
import { connect } from "react-redux";
import { registerRoleAction } from "./../../actions/rolesAction";
import ManageRolesForm from "../../components/ManageRolesForm";

const RolesRoute = props => {
  return <ManageRolesForm {...props} />;
};

const mapStateToProps = state => {
  return {
    formErrors: state.rolesReducer.formErrors,
    Submitting: state.rolesReducer.Submitting
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     registerRole: role => dispatch(registerRoleAction(role))
//   };
// };

export default connect(mapStateToProps, null)(RolesRoute);
