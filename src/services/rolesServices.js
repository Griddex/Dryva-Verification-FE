import httpOthers from "./httpService/httpOthers";
import { useState } from "react";

export const GetRoles = () => {
  const [fetchStatus, setFetchStatus] = useState(false);

  httpOthers("get", "Admin/GetRoles", null, null)
    .then(response => {
      if (response.status === 200) {
        setFetchStatus(true);
        alert("Successfully submitted");
      }
    })
    .catch(errors => {
      if (errors.response) {
        const responseErrors = errors.response.data[""];
        setFetchStatus(false);
      }
    });
};

//Edit Role
//Delete
