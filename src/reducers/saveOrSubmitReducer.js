import { SEND_VALUES_TO_STORE } from "../actions/sendValuesToStoreAction";
import {
  FORM_SUBMISSION_REQUEST,
  FORM_SUBMISSION_SUCCESS,
  FORM_SUBMISSION_FAILURE
} from "../actions/submitAction";
import StoreInitialValues from "../store/store";

export const saveOrSubmitReducer = (state = StoreInitialValues, action) => {
  switch (action.type) {
    case SEND_VALUES_TO_STORE:
      return { ...state, [action.name]: action.value };
    case FORM_SUBMISSION_REQUEST:
      return {
        ...state,
        Submitting: action.payload.Submitting,
        result: action.payload.result,
        errors: action.payload.errors
      };
    case FORM_SUBMISSION_SUCCESS:
      return {
        ...state,
        Submitting: action.payload.Submitting,
        result: action.payload.result,
        errors: action.payload.errors
      };
    case FORM_SUBMISSION_FAILURE:
      return {
        ...state,
        Submitting: action.payload.Submitting,
        result: action.payload.result,
        errors: action.payload.errors
      };
    default:
      return { ...state };
  }
};
