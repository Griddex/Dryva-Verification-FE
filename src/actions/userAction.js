import history from "./../services/historyService";
import authService from "./../services/authService";

export const LOGIN_USER_COMMENCE = "LOGIN_USER_COMMENCE";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const REGISTER_USER_COMMENCE = "REGISTER_USER_COMMENCE";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const loginUserAction = (email, password, rememberMe) => (
  dispatch,
  getState,
  http
) => {
  dispatch({
    type: LOGIN_USER_COMMENCE,
    payload: { Submitting: true, formErrors: [] }
  });
  const { httpLoginOrRegister } = http;
  httpLoginOrRegister("post", "/Account/Login", {
    email: email,
    password: password,
    rememberMe: rememberMe
  })
    .then(response => {
      const { token } = response.data;
      localStorage.clear();
      localStorage.setItem("token", token);

      const currentRole = authService().Role;

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { token: token, Submitting: false, isAuthenticated: true }
      });
      history.replace(`/${currentRole}`);
    })
    .catch(errors => {
      if (errors.response) {
        const responseErrors = errors.response.data[""];
        dispatch({
          type: LOGIN_USER_FAILURE,
          payload: {
            formErrors: responseErrors,
            Submitting: false,
            isAuthenticated: false
          }
        });
      }
    });
};

export const registerUserAction = (
  firstname,
  middlename,
  lastname,
  nickname,
  role,
  mobilenumber,
  email,
  password,
  confirmpassword
) => (dispatch, getState, http) => {
  const { httpLoginOrRegister } = http;
  dispatch({
    type: REGISTER_USER_COMMENCE,
    payload: { Submitting: true, formErrors: [] }
  });

  httpLoginOrRegister("post", "/Account/Register", {
    firstname: firstname,
    middlename: middlename,
    lastname: lastname,
    nickname: nickname,
    role: role,
    mobilenumber: mobilenumber,
    email: email,
    password: password,
    confirmpassword: confirmpassword
  })
    .then(response => {
      if (
        response.data.message === "Registration Succeeded!" &&
        response.status === 200
      ) {
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: {
            Submitting: false,
            formErrors: [],
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
        console.log("Logged output -->: responseErrors", responseErrors);
        dispatch({
          type: REGISTER_USER_FAILURE,
          payload: { Submitting: false, responseErrors: responseErrors }
        });
      }
    });
};
