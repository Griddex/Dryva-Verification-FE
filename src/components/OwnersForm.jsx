import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Input from "./common/Input";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  "@global": { body: { backgroundColor: "#FFF" } },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  }
}));

export default function OwnersForm(props) {
  const {
    values: {
      nameOfOwner,
      ownersHouseAddress,
      ownersMobileNo,
      ownersNextOfKinName
    },
    errors,
    handleChange
  } = props;

  const classes = useStyles();
  return (
    <Grid container direction="column" alignItems="center" spacing={10}>
      <Grid item>
        {Input(
          "nameOfOwner",
          "Name of Owner",
          nameOfOwner,
          500,
          errors,
          handleChange
        )}
      </Grid>
      <Grid item>
        {Input(
          "ownersHouseAddress",
          "Owner's house address",
          ownersHouseAddress,
          500,
          errors,
          handleChange
        )}
      </Grid>
      <Grid item>
        {Input(
          "ownersMobileNo",
          "Owner's Mobile No.",
          ownersMobileNo,
          200,
          errors,
          handleChange
        )}
      </Grid>

      <Grid item>
        {Input(
          "ownersNextOfKinName",
          "Owner's Next of Kin Name",
          ownersNextOfKinName,
          500,
          errors,
          handleChange
        )}
      </Grid>
    </Grid>
  );
}
