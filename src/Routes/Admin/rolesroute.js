import React from "react";
import { connect } from "react-redux";
import { registerRoleAction } from "./../../actions/rolesAction";
import NewRoleForm from "../../components/NewRoleForm";
import ManageRolesForm from "../../components/ManageRolesForm";

const RolesRoute = props => {
  return (
    <div>
      {/* <NewRoleForm {...props} />
      <br />
      <br />
      <br /> */}
      <ManageRolesForm {...props} />
    </div>
  );
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
