import axios from "axios";

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
  console.log("Logged output: rememberMe", rememberMe);
  console.log("Logged output: loginUserAction -> password", password);
  console.log("Logged output: loginUserAction -> email", email);
  dispatch({
    type: LOGIN_USER_COMMENCE,
    payload: { isSubmitting: true, errors: [] }
  });

  http
    .httpLogin("post", "/Account/Login", {
      email: email,
      password: password,
      rememberMe: rememberMe
    })
    .then(response => {
      // const token = response.data.token;
      // const username = response.data.username;

      // localStorage.setItem("token", token);
      // localStorage.setItem("username", username);
      console.log(response);
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: LOGIN_USER_FAILURE,
        payload: error
      });
    });

  // axios
  //   .post("https://jsonplaceholder.typicode.com/posts", {
  //     title: "Gideon title",
  //     body: "Gideon body"
  //   })
  //   .then(response => {
  //     console.log("Logged output: response", response);
  //     //   dispatch({
  //     //     type: LOGIN_USER_SUCCESS,
  //     //     payload: { token: response.token }
  //     //   });
  //     //   localStorage.setItem("token", "token");
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     dispatch({
  //       type: LOGIN_USER_FAILURE,
  //       payload: error
  //     });
  //   });
};

export const registerUserAction = (
  email,
  password,
  confirmpassword
) => dispatch => {
  dispatch({
    type: REGISTER_USER_COMMENCE,
    payload: {
      email: email,
      password: password,
      confirmpassword: confirmpassword
    }
  });

  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: "Gideon title",
      body: "Gideon body"
    })
    .then(response => {
      console.log("Logged output: response", response);
      //   dispatch({
      //     type: REGISTER_USER_SUCCESS,
      //     payload: { token: response.token }
      //   });
      //   localStorage.setItem("token", "token");
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: REGISTER_USER_FAILURE,
        payload: error
      });
    });
};
