import StoreInitialValues from "./../store/store";
import {
  FORM_SUBMISSION_REQUEST,
  FORM_SUBMISSION_SUCCESS,
  FORM_SUBMISSION_FAILURE
} from "./../actions/submitAction";

export function submitReducer(state = StoreInitialValues, action) {
  switch (action.type) {
    case FORM_SUBMISSION_REQUEST:
      return { ...state };
    case FORM_SUBMISSION_SUCCESS:
      return { ...state };
    case FORM_SUBMISSION_FAILURE:
      return { ...state };
    default:
      return { ...state };
  }
}
