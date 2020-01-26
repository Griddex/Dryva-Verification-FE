import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { registerUserAction } from "./../../actions/userAction";
import { RegistrationSuccess } from "./registrationSuccess";
import { sendLoginToStoreAction } from "./../../actions/sendLoginToStoreAction";
import RegisterForm from "./../../components/RegisterForm";
import { ReactComponent as Logo } from "../../images/logo.svg";
import UserState from "./../../store/userStore";

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
              initialValues={UserState}
              //IdentityOptions validation needed here
              validationSchema={Yup.object().shape({
                firstname: Yup.string().required("Firstname is required"),
                lastname: Yup.string().required("Lastname is required"),
                mobilenumber: Yup.string().required(
                  "Mobile number is required"
                ),
                password: Yup.string().required("Password is required"),
                confirmpassword: Yup.string().oneOf(
                  [Yup.ref("password"), null],
                  "Passwords must match"
                )
              })}
              onSubmit={(
                {
                  firstname,
                  lastname,
                  middlename,
                  mobilenumber,
                  email,
                  password,
                  confirmpassword
                },
                formikBag
              ) => {
                registerUser(
                  firstname,
                  lastname,
                  middlename,
                  mobilenumber,
                  email,
                  password,
                  confirmpassword
                );
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
    Submitted: state.userReducer.Submitted,
    registrationSucceeded: state.userReducer.registrationSucceeded
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFormLoginInStore: (name, value) =>
      dispatch(sendLoginToStoreAction(name, value)),
    registerUser: (
      firstname,
      lastname,
      middlename,
      mobilenumber,
      email,
      password,
      confirmpassword
    ) =>
      dispatch(
        registerUserAction(
          firstname,
          lastname,
          middlename,
          mobilenumber,
          email,
          password,
          confirmpassword
        )
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRoute);
