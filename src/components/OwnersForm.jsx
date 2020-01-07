import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Input from "./common/Input";

const useStyles = makeStyles(theme => ({
  "@global": { body: { backgroundColor: "#FFF" } },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  }
}));

export default function OwnersForm(props) {
  const {
    values: {
      nameOfOwner,
      ownersHouseAddress,
      ownersMobileNo,
      ownersNextOfKinName,
      classes
    },
    errors,
    handleChange
  } = props;

  const classes = useStyles();
  return (
    <div style={{ width: "80%" }} className={classes.form}>
      {Input(
        "nameOfOwner",
        "Name of Owner",
        nameOfOwner,
        500,
        errors,
        handleChange
      )}
      {Input(
        "ownersHouseAddress",
        "Owner's house address",
        ownersHouseAddress,
        500,
        errors,
        handleChange
      )}
      {Input(
        "ownersMobileNo",
        "Owner's Mobile No.",
        ownersMobileNo,
        200,
        errors,
        handleChange
      )}

      {Input(
        "ownersNextOfKinName",
        "Owner's Next of Kin Name",
        ownersNextOfKinName,
        500,
        errors,
        handleChange
      )}
    </div>
  );
}
