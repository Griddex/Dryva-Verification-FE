import {
  LOGIN_USER_COMMENCE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REGISTER_USER_COMMENCE,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from "./../actions/userAction";
import { SEND_LOGIN_TO_STORE } from "./../actions/sendLoginToStoreAction";
import UserState from "./../store/userStore";

export const userReducer = (state = UserState, action) => {
  switch (action.type) {
    case SEND_LOGIN_TO_STORE:
      return {
        ...state,
        [action.name]: action.value
      };
    case LOGIN_USER_COMMENCE:
      return {
        ...state,
        Submitting: action.payload.Submitting,
        formErrors: action.payload.formErrors
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        loginSucceeded: action.payload.loginSucceeded
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        formErrors: action.payload
      };
    case REGISTER_USER_COMMENCE:
      return {
        ...state,
        Submitting: action.payload.Submitting,
        formErrors: action.payload.formErrors
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        Submitting: false,
        formErrors: [],
        registrationSucceeded: true
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        formErrors: action.payload
      };
    default:
      return { ...state };
  }
};
