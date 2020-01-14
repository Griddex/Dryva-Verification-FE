import React from "react";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Formik, Field, Form, ErrorMessage } from "formik";

function LoginForm(props) {
  const {
    values: { username, password },
    errors,
    touched,
    handleSubmit,
    handleChange,
    handleBlur,
    isValid,
    setFieldTouched,
    isSubmitting,
    status,
    classes
  } = props;

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>{errors.username}</div>
      <div className="form-group">
        <TextField
          name="username"
          helperText={touched.username ? errors.username : ""}
          error={Boolean(errors.username && touched.username)}
          label="Username"
          margin="normal"
          fullWidth
          variant="outlined"
          value={username}
          onChange={handleChange}
          autoFocus
        />
        <ErrorMessage
          name="username"
          component="div"
          className="invalid-feedback"
        />
      </div>

      <TextField
        name="password"
        helperText={touched.password ? errors.password : ""}
        error={Boolean(errors.password && touched.password)}
        label="Password"
        margin="normal"
        fullWidth
        autoComplete="current-password"
        variant="outlined"
        type="password"
        value={password}
        onChange={handleChange}
      />
      <div>{errors.password}</div>

      {isSubmitting && (
        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
      )}

      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid}
      >
        Login
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
      </Grid>

      {status && <div className={"alert alert-danger"}>{status}</div>}
    </form>
  );
}

export default LoginForm;
