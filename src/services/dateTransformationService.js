import React from "react";

export const dateTransformationService = dateString => {
  var date = new Date(Date.parse(dateString));

  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getUTCDate()
  );
};
