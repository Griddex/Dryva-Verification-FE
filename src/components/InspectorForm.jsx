import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Input from "./common/Input";
import Select from "./common/Select";
import MultiInput from "./common/MultiInput";
import DatePicker from "./common/DatePicker";

const useStyles = makeStyles(theme => ({
  "@global": { body: { backgroundColor: "#FFF" } },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  }
}));

function InspectorForm(props) {
  const {
    values: {
      nameOfInspector,
      nameOfSupervisor,
      placeOfInspection,
      dateOfInspection,
      vehiclePlateNumber,
      inspectionPassed,
      generalRemarks,
      classes
    },
    errors,
    handleChange
  } = props;

  const classes = useStyles();
  return (
    <div style={{ width: "80%" }} className={classes.form}>
      {Input(
        "nameOfInspector",
        "Name of Inspector",
        nameOfInspector,
        400,
        errors,
        handleChange
      )}
      {Input(
        "nameOfSupervisor",
        "Name of Supervisor",
        nameOfSupervisor,
        400,
        errors,
        handleChange
      )}
      {Input(
        "placeOfInspection",
        "Place of Inspection",
        placeOfInspection,
        300,
        errors,
        handleChange
      )}
      <DatePicker
        label="Date of Inspection"
        dateOfInspection={dateOfInspection}
        handleChange={handleChange}
      />
      {Input(
        "vehiclePlateNumber",
        "Vehicle Plate Number",
        vehiclePlateNumber,
        200,
        errors,
        handleChange
      )}
      {Select(
        "inspectionPassed",
        "Inspection Passed?",
        inspectionPassed,
        ["Yes", "No"],
        100,
        errors,
        handleChange
      )}
      {MultiInput(
        "generalRemarks",
        "General Remarks",
        generalRemarks,
        500,
        errors,
        handleChange
      )}
    </div>
  );
}

export default InspectorForm;
