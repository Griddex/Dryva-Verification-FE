import React from "react";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

const unauthorized = () => {
  return (
    <div>
      <CancelPresentationIcon htmlColor={"red"} style={{ fontSize: 70 }} />
      <h1>Unauthorized!</h1>
    </div>
  );
};

export default unauthorized;
