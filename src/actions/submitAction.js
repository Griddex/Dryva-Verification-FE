import history from "./../services/historyService";
import dataService from "./../services/dataService";

export const FORM_SUBMISSION_REQUEST = "FORM_SUBMISSION_REQUEST";
export const FORM_SUBMISSION_SUCCESS = "FORM_SUBMISSION_SUCCESS";
export const FORM_SUBMISSION_FAILURE = "FORM_SUBMISSION_FAILURE";

const submitRequestAction = () => {
  return {
    type: FORM_SUBMISSION_REQUEST,
    payload: { Submitting: true, result: null, errors: [] }
  };
};

const submitSuccessAction = result => {
  return {
    type: FORM_SUBMISSION_SUCCESS,
    payload: { Submitting: false, result: result, errors: [] }
  };
};

const submitFailureAction = errors => {
  return {
    type: FORM_SUBMISSION_FAILURE,
    payload: { Submitting: false, result: null, errors: errors }
  };
};

export const submitAction = () => {
  return (dispatch, getState, http) => {
    const { httpOthers } = http;
    dispatch(submitRequestAction());
    const data = dataService(getState().saveOrSubmitReducer);
    httpOthers(
      "post",
      "Data/PostData",
      { "Content-type": "multipart/form-data" },
      data
    )
      .then(response => {
        if (response.status === 201) {
          submitSuccessAction(response.data);
          history.replace("/driverslist");
          alert("Successfully submitted");
        }
      })
      .catch(errors => {
        if (errors.response) {
          const responseErrors = errors.response.data[""];
          submitFailureAction(responseErrors);
        }
      });
  };
};
