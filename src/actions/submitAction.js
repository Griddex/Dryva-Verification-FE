export const FORM_SUBMISSION_REQUEST = "FORM_SUBMISSION_REQUEST";
export const FORM_SUBMISSION_SUCCESS = "FORM_SUBMISSION_SUCCESS";
export const FORM_SUBMISSION_FAILURE = "FORM_SUBMISSION_FAILURE";

const submitRequestAction = () => {
  return {
    type: FORM_SUBMISSION_REQUEST,
    payload: { isSubmitting: true, result: null, errors: [] }
  };
};

const submitSuccessAction = result => {
  return {
    type: FORM_SUBMISSION_SUCCESS,
    payload: { isSubmitting: false, result: result, errors: [] }
  };
};

const submitFailureAction = errors => {
  return {
    type: FORM_SUBMISSION_FAILURE,
    payload: { isSubmitting: false, result: null, errors: errors }
  };
};

export const submitAction = () => {
  return (dispatch, getState) => {
    dispatch(submitRequestAction());
    alert("Form is being submitted");
  };
};
