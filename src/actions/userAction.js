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
  const { httpLogin } = http;
  httpLogin("post", "/Account/Login", {
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
      history.replace(`/Auth`);
    })
    .catch(errors => {
      if (errors.response) {
        const responseErrors = errors.response.data["Errors"];
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
  const { httpRegister } = http;

  dispatch({
    type: REGISTER_USER_COMMENCE,
    payload: { Submitting: true, formErrors: [] }
  });

  httpRegister("post", "Admin/Register", null, {
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
      const currentRole = authService().Role;
      //Define the route where this route will be
      //rendered or use dialog box
      history.replace(`/Auth/registration_success`);
    })
    .catch(errors => {
      if (errors.response) {
        const responseErrors = errors.response.data[""];
        dispatch({
          type: REGISTER_USER_FAILURE,
          payload: { Submitting: false, responseErrors: responseErrors }
        });
      }
    });
};
