import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import RegisterForm from "./../../components/RegisterForm";
import { Formik } from "formik";
import * as Yup from "yup";
import CssBaseline from "@material-ui/core/CssBaseline";
import { sendValuesToStoreAction } from "./../../actions/sendValuesToStoreAction";
import { loginUserAction } from "./../../actions/userAction";
import { connect } from "react-redux";

function RegisterRoute(props) {
  const useStyles = makeStyles(theme => ({
    "@global": { body: { backgroundColor: "#FFF" } },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(5)
    }
  }));

  const { match, history, location, loginUser } = props;
  const classes = useStyles();

  return (
    <>
      <Container maxwidth="sm" fixed>
        <Logo />
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmpassword: ""
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required"),
            confirmpassword: Yup.string().required(
              "Confirmation Password is required"
            )
          })}
          onSubmit={(
            { email, password, rememberMe },
            { setStatus, setSubmitting }
          ) => {
            loginUser(email, password, rememberMe);
          }}
        >
          {formikProps => <RegisterForm {...formikProps} {...props} />}
        </Formik>
      </Container>
    </>
  );
}

const mapStateToProps = state => {
  return {
    email: state.email,
    password: state.password,
    rememberMe: state.rememberMe
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveFormValuesInStore: (name, value) =>
      dispatch(sendValuesToStoreAction(name, value)),
    loginUser: (email, password, rememberMe) =>
      dispatch(loginUserAction(email, password, rememberMe))
  };
};

export default connect(null, mapDispatchToProps)(RegisterRoute);
