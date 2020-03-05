import httpOthers from "./../services/httpService/httpOthers";

export const updateEmailSettingsAction = (
  from,
  smtpserver,
  port,
  username,
  password,
  enablessl,
  SetSubmitting
) => {
  httpOthers(
    "post",
    "/Admin/UpdateEmailSettings",
    { "Content-type": "application/json" },
    { from, smtpserver, port, username, password, enablessl }
  )
    .then(response => {
      if (response.status === 200) {
        SetSubmitting(false);
      }
    })
    .catch(errors => {
      if (errors.response) {
        const responseErrors = errors.response.data[""];
      }
    });
};
