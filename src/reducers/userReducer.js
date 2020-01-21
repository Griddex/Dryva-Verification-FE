import {
  LOGIN_USER_COMMENCE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
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
        isSubmitting: action.payload.isSubmitting,
        errors: action.payload.errors
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return { ...state };
  }
};
