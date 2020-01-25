import React from "react";
import Button from "@material-ui/core/Button";
import Input from "./common/Input";
import CheckBox from "./common/CheckBox";

function RegisterForm(props) {
  const {
    values: {
      firstname,
      lastname,
      middlename,
      mobilenumber,
      email,
      password,
      confirmpassword
    },
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    status,
    isSubmitting,
    saveFormLoginInStore
  } = props;

  return (
    <form onSubmit={handleSubmit}>
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
      {isSubmitting && (
        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
      )}
      <Button
        type="submit"
        width={400}
        variant="contained"
        color="primary"
        disabled={!isValid || isSubmitting}
      >
        Register
      </Button>
      {status && <div className={"alert alert-danger"}>{status}</div>}
    </form>
  );
}

export default RegisterForm;
