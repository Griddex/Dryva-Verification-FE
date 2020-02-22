import httpOthers from "./httpService/httpOthers";
import { useState } from "react";

export const GetRoles = () => {
  const rolesData = [];

  httpOthers("get", "Admin/GetAllRoles", null, null)
    .then(response => {
      if (response.status === 200) {
        rolesData = response.data;
      }
    })
    .catch(errors => {
      if (errors.response) {
        const responseErrors = errors.response.data[""];
      }
    });

  return rolesData;
};

//Edit Role
//Delete
