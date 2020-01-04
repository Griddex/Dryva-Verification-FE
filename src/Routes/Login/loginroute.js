import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from "./../../components/LoginForm";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function LoginRoute(props) {
  console.log("Logged output: LoginRoute -> props", props);
  const useStyles = makeStyles(theme => ({
    "@global": { body: { backgroundColor: "#EFEFEF" } },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(5)
    },
    logo: { width: "100%", alignSelf: "center" }
  }));

  const { match, history, location } = props;
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Logo className={classes.logo} />
        <Formik
          className={classes.form}
          initialValues={{
            username: "",
            password: ""
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required")
          })}
          onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
            console.log("Submitted");
            history.push("/vehicle");
          }}
          render={props => <LoginForm {...props} classes={classes} />}
        />
      </div>
    </Container>
  );
}

export default LoginRoute;
