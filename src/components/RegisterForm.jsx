import React, { useEffect, useState, Suspense } from "react";
import Button from "@material-ui/core/Button";
import Input from "./common/Input";
import Select from "./common/Select";
import ReactLoading from "react-loading";
import { connect } from "react-redux";

function RegisterForm(props) {
  const {
    values: {
      firstname,
      middlename,
      lastname,
      nickname,
      role,
      mobilenumber,
      email,
      password,
      confirmpassword
    },
    loadErrors,
    formLoading,
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    status,
    Submitting,
    saveFormLoginInStore
  } = props;

  let errorsChecked = errors ? { ...errors } : {};
  const errorsCheckedArr = Object.values({ ...errorsChecked });
  let loadErrorsChecked = loadErrors ? [...loadErrors] : [];
  let allErrors = [...errorsCheckedArr, ...loadErrorsChecked];

  if (formLoading) return <ReactLoading type={"Spin"} color="#006992" />;

  let { rolesData } = props;
  const roles = sessionStorage.getItem("roles");
  if (roles === null) rolesData = ["Officer", "Admin"];
  else rolesData = roles.split(",");

  return (
    <div>
      <br />
      <br />
      {allErrors &&
        allErrors.map((e, i) => {
          return (
            <p key={i} style={{ color: "red" }}>
              {e}
            </p>
          );
        })}
      <form onSubmit={handleSubmit}>
        <h2>
          <b>Name Credentials</b>
        </h2>
        <hr />
        {Input(
          "firstname",
          "Firstname",
          firstname,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormLoginInStore
        )}
        {Input(
          "middlename",
          "Middlename",
          middlename,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormLoginInStore
        )}
        {Input(
          "lastname",
          "Lastname",
          lastname,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormLoginInStore
        )}
        {Input(
          "nickname",
          "Nickname",
          nickname,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormLoginInStore
        )}
        <br />
        <br />
        <h2>
          <b>Role Credentials</b>
        </h2>
        <hr />
        {Select(
          "role",
          "Role",
          role,
          rolesData,
          100,
          errors,
          handleChange,
          handleBlur,
          saveFormLoginInStore
        )}
        <br />
        <br />
        <h2>
          <b>Identity Credentials</b>
        </h2>
        <hr />
        {Input(
          "mobilenumber",
          "Mobile number",
          mobilenumber,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormLoginInStore
        )}
        {Input(
          "email",
          "Email",
          email,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormLoginInStore
        )}
        <br />
        <p>
          Your password must be at least 8 characters long, contain at least 1
          digit, 1 lowercase letter, 1 upper case letter and a special character
        </p>
        {Input(
          "password",
          "Password",
          password,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormLoginInStore,
          "password"
        )}
        {Input(
          "confirmpassword",
          "Confirm Password",
          confirmpassword,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormLoginInStore,
          "password"
        )}
        <br />
        <br />
        {Submitting && (
          <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
        )}
        <Button
          type="submit"
          width={400}
          variant="contained"
          color="primary"
          disabled={!isValid || Submitting}
        >
          Register
        </Button>
        {status && <div className={"alert alert-danger"}>{status}</div>}
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    rolesData: state.rolesReducer.roles,
    loadErrors: state.rolesReducer.formErrors,
    formLoading: state.rolesReducer.Loading
  };
};

export default connect(mapStateToProps, null)(RegisterForm);
