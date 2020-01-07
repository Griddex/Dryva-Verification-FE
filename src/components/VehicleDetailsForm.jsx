import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Input from "./common/Input";
import Select from "./common/Select";
import DatePicker from "./common/DatePicker";
import {
  VehicleTypes,
  VehicleMakes,
  VehicleManufactureYears
} from "./../services/vehicleService";

const useStyles = makeStyles(theme => ({
  "@global": { body: { backgroundColor: "#FFF" } },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  }
}));

export default function VehicleDetailsForm(props) {
  const {
    values: {
      vehicleType,
      vehicleMake,
      yearOfManufacture,
      ChassisNo,
      EngineNo,
      MOTExpiry,
      InsuranceExpiry
    },
    errors,
    handleChange
  } = props;

  const classes = useStyles();
  return (
    <div style={{ width: "90%" }} className={classes.form}>
      {Select(
        "vehicleType",
        "Vehicle Type",
        vehicleType,
        VehicleTypes,
        300,
        errors,
        handleChange
      )}
      {Select(
        "vehicleMake",
        "Vehicle Make",
        vehicleMake,
        VehicleMakes,
        300,
        errors,
        handleChange
      )}
      {Select(
        "yearOfManufacture",
        "Year of Manufacture",
        yearOfManufacture,
        VehicleManufactureYears,
        150,
        errors,
        handleChange
      )}
      {Input(
        "ChassisNo",
        "Chassis Number",
        ChassisNo,
        250,
        errors,
        handleChange
      )}
      {Input("EngineNo", "Engine Number", EngineNo, 250, errors, handleChange)}
      <DatePicker
        label="MOT Expiry"
        dateOfInspection={MOTExpiry}
        handleChange={handleChange}
      />
      <DatePicker
        label="Insurance Expiry"
        dateOfInspection={InsuranceExpiry}
        handleChange={handleChange}
      />
    </div>
  );
}
