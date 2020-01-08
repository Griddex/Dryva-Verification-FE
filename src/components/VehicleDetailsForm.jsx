import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
    <Grid container direction="column" spacing={4}>
      <Grid item xs={3}>
        {Select(
          "vehicleType",
          "Vehicle Type",
          vehicleType,
          VehicleTypes,
          300,
          errors,
          handleChange
        )}
      </Grid>
      <Grid item xs={3}>
        {Select(
          "vehicleMake",
          "Vehicle Make",
          vehicleMake,
          VehicleMakes,
          300,
          errors,
          handleChange
        )}
      </Grid>
      <Grid item xs={3}>
        {Select(
          "yearOfManufacture",
          "Year of Manufacture",
          yearOfManufacture,
          VehicleManufactureYears,
          100,
          errors,
          handleChange
        )}
      </Grid>

      <Grid item>
        {Input(
          "ChassisNo",
          "Chassis Number",
          ChassisNo,
          250,
          errors,
          handleChange
        )}
      </Grid>
      <Grid item>
        {Input(
          "EngineNo",
          "Engine Number",
          EngineNo,
          250,
          errors,
          handleChange
        )}
      </Grid>
      <Grid item xs={3}>
        <DatePicker
          label="MOT Expiry"
          dateOfInspection={MOTExpiry}
          handleChange={handleChange}
        />
      </Grid>
      <Grid item xs={3}>
        <DatePicker
          label="Insurance Expiry"
          dateOfInspection={InsuranceExpiry}
          handleChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}
