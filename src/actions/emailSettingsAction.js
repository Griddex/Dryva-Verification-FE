import httpOthers from "./../services/httpService/httpOthers";

export const updateEmailSettingsAction = ({
  from,
  smtpserver,
  port,
  username,
  password,
  enablessl
}) => {
  httpOthers(
    "post",
    "/Admin/UpdateEmailSettings",
    { "Content-type": "application/json" },
    { from, smtpserver, port, username, password, enablessl }
  )
    .then(response => {
      if (
        response.data.message === "Role Created!" &&
        response.status === 200
      ) {
        console.log("Logged output -->: response.data", response.data);
      }
    })
    .catch(errors => {
      if (errors.response) {
        const responseErrors = errors.response.data[""];
        console.log("Logged output -->: responseErrors", responseErrors);
      }
    });
};
