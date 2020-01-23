import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import RegisterForm from "./../../components/RegisterForm";
import { Formik } from "formik";
import * as Yup from "yup";
import { sendLoginToStoreAction } from "./../../actions/sendLoginToStoreAction";
import { registerUserAction } from "./../../actions/userAction";
import { connect } from "react-redux";
import { RegistrationSuccess } from "./registrationSuccess";

function RegisterRoute(props) {
  const useStyles = makeStyles(theme => ({
    "@global": { body: { backgroundColor: "#FFF" } },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(5)
    },
    error: { color: "red" }
  }));

  const { formErrors, registerUser, registrationSucceeded, history } = props;
  //console.log("Logged output: props", props);
  const classes = useStyles();

  return (
    <>
      <Container maxwidth="sm" fixed>
        <Logo />
        {registrationSucceeded ? (
          <RegistrationSuccess {...props} />
        ) : (
          <div>
            <div>
              {formErrors &&
                formErrors.map((e, i) => {
                  return (
                    <p key={i} className={classes.error}>
                      {e}
                    </p>
                  );
                })}
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
                confirmpassword: ""
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().required("Email is required"),
                password: Yup.string().required("Password is required"),
                confirmpassword: Yup.string().oneOf(
                  [Yup.ref("password"), null],
                  "Passwords must match"
                )
              })}
              onSubmit={(
                { email, password, confirmpassword },
                { setSubmitting }
              ) => {
                registerUser(email, password, confirmpassword);
                setSubmitting(false);
              }}
            >
              {formikProps => <RegisterForm {...formikProps} {...props} />}
            </Formik>
            <Link
              onClick={() => history.push("/login")}
              style={{ cursor: "pointer" }}
              className="btn btn-secondary"
            >
              Already registered? Login
            </Link>
          </div>
        )}
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  return {
    formErrors: state.userReducer.formErrors,
    registrationSucceeded: state.userReducer.registrationSucceeded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFormLoginInStore: (name, value) =>
      dispatch(sendLoginToStoreAction(name, value)),
    registerUser: (email, password, confirmpassword) =>
      dispatch(registerUserAction(email, password, confirmpassword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRoute);
