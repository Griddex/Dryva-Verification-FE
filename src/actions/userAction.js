import history from "./../services/historyService";

export const LOGIN_USER_COMMENCE = "LOGIN_USER_COMMENCE";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const REGISTER_USER_COMMENCE = "REGISTER_USER_COMMENCE";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const loginUserAction = (email, password, rememberMe) => (
  dispatch,
  getState,
  { http }
) => {
  dispatch({
    type: LOGIN_USER_COMMENCE,
    payload: { Submitting: true, formErrors: [] }
  });

  http
    .httpLoginOrRegister("post", "/Account/Login", {
      email: email,
      password: password,
      rememberMe: rememberMe
    })
    .then(response => {
      const { token, email } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      console.log(response);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { token, loginSucceeded: true }
      });
      history.replace("/verification");
    })
    .catch(errors => {
      if (errors.response) {
        console.log("Logged output: errors.response", errors.response);
        const responseErrors = errors.response.data[""];
        dispatch({
          type: LOGIN_USER_FAILURE,
          payload: responseErrors
        });
      }
    });
};

export const registerUserAction = (
  firstname,
  middlename,
  lastname,
  mobilenumber,
  email,
  password,
  confirmpassword
) => (dispatch, getState, { http }) => {
  dispatch({
    type: REGISTER_USER_COMMENCE,
    payload: { Submitting: true, errors: [] }
  });

  http
    .httpLoginOrRegister("post", "/Account/Register", {
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      mobilenumber: mobilenumber,
      email: email,
      password: password,
      confirmpassword: confirmpassword
    })
    .then(response => {
      console.log("Logged output: response", response);
      if (
        response.data.message === "Registration Succeeded!" &&
        response.status === 200
      ) {
        localStorage.setItem("nickName", response.data.applicationUser);
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: {
            Submitting: false,
            errors: [],
            registrationSucceeded: true
          }
        });
      }
      //Load registration succeeded page with link to goto login page
      //history.push("/register/success");
    })
    .catch(errors => {
      //Hook into the error coming back, use the error obj to update the errors
      //obj in the redux store
      if (errors.response) {
        const responseErrors = errors.response.data[""];
        dispatch({
          type: REGISTER_USER_FAILURE,
          payload: responseErrors
        });
      }
    });
};
