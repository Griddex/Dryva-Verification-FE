import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Input from "./common/Input";
import Select from "./common/Select";
import MultiInput from "./common/MultiInput";
import DatePicker from "./common/DatePicker";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

function InspectorForm(props) {
  const {
    values: {
      nameOfInspector,
      nameOfSupervisor,
      placeOfInspection,
      dateOfInspection,
      vehiclePlateNumber,
      inspectionPassed,
      generalRemarks
    },
    errors,
    touched,
    handleChange,
    handleBlur,
    saveFormValuesInStore
  } = props;

  const useStyles = makeStyles(theme => ({
    "@global": { body: { backgroundColor: "#FFF" } },
    form: {
      display: "flex",
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      flexFlow: "column" || "wrap",
      justifyContent: "flex-start"
    }
  }));

  const classes = useStyles();
  return (
    <Grid container spacing={10} direction="column" justify="flex-start">
      <Grid item>
        {Input(
          "nameOfInspector",
          "Name of Inspector",
          nameOfInspector,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
      <Grid item>
        {Input(
          "nameOfSupervisor",
          "Name of Supervisor",
          nameOfSupervisor,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
      <Grid item>
        {Input(
          "placeOfInspection",
          "Place of Inspection",
          placeOfInspection,
          300,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
      <Grid item>
        <DatePicker
          name="dateOfInspection"
          label="Date of Inspection"
          handleBlur={handleBlur}
          handleChange={handleChange}
          saveFormValuesInStore={saveFormValuesInStore}
        />
      </Grid>
      <Grid item>
        {Input(
          "vehiclePlateNumber",
          "Vehicle Plate Number",
          vehiclePlateNumber,
          200,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
      <Grid item>
        {Select(
          "inspectionPassed",
          "Inspection Passed?",
          inspectionPassed,
          ["Yes", "No"],
          100,
          errors,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
      <Grid item>
        {MultiInput(
          "generalRemarks",
          "General Remarks",
          generalRemarks,
          500,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(null, mapDispatchToProps)(InspectorForm);
