import {
  SUBMIT_ROLES_COMMENCE,
  SUBMIT_ROLES_SUCCESS,
  SUBMIT_ROLES_FAILURE
} from "./../actions/rolesAction";
import { SEND_LOGIN_TO_STORE } from "./../actions/sendLoginToStoreAction";
import UserState from "./../store/userStore";

export const rolesReducer = (state = UserState, action) => {
  switch (action.type) {
    case SEND_LOGIN_TO_STORE:
      return {
        ...state,
        [action.name]: action.value
      };
    case SUBMIT_ROLES_COMMENCE:
      return {
        ...state,
        Submitting: action.payload.Submitting,
        formErrors: action.payload.formErrors
      };
    case SUBMIT_ROLES_SUCCESS:
      return {
        ...state,
        Submitting: action.payload.Submitting
      };
    case SUBMIT_ROLES_FAILURE:
      return {
        ...state,
        formErrors: action.payload.formErrors,
        Submitting: action.payload.Submitting
      };
    default:
      return { ...state };
  }
};
