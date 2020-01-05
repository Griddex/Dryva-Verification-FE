import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Input from "./common/Input";
import Select from "./common/Select";
import MultiInput from "./common/MultiInput";

const useStyles = makeStyles(theme => ({
  "@global": { body: { backgroundColor: "#FFF" } },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  }
}));

function VehicleDetailsForm() {
  const classes = useStyles();
  return (
    <Formik
      className={classes.form}
      initialValues={{
        vehicleType: "",
        vehicleMake: "",
        vehicleModel: "",
        yearOfManufacture: "",
        ChassisNo: "",
        EngineNo: "",
        MOTExpiry: "No",
        InsuranceExpiry: "",
        classes
      }}
      validationSchema={Yup.object().shape({
        ChassisNo: Yup.string().required("Vehicle Chassis Number is required"),
        EngineNo: Yup.string().required("Vehicle Engine Number is required")
      })}
    >
      {props => {
        const {
          values: {
            vehicleType,
            vehicleMake,
            vehicleModel,
            yearOfManufacture,
            ChassisNo,
            EngineNo,
            MOTExpiry,
            InsuranceExpiry,
            classes
          },
          errors,
          touched,
          handleChange
        } = props;

        return (
          <Form style={{ width: "80%" }} className={classes.form}>
            {Select(
              "vehicleType",
              "Vehicle Type",
              vehicleType,
              touched,
              errors,
              handleChange
            )}
            {Select(
              "vehicleMake",
              "Vehicle Make",
              vehicleMake,
              touched,
              errors,
              handleChange
            )}
            {Select(
              "vehicleModel",
              "Vehicle Model",
              vehicleModel,
              touched,
              errors,
              handleChange
            )}
            {Select(
              "yearOfManufacture",
              "Year of Manufacture",
              yearOfManufacture,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "ChassisNo",
              "Chassis Number",
              ChassisNo,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "EngineNo",
              "Engine Number",
              EngineNo,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "MOTExpiry",
              "MOT Expiry",
              MOTExpiry,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "InsuranceExpiry",
              "Insurance Expiry",
              InsuranceExpiry,
              touched,
              errors,
              handleChange
            )}
          </Form>
        );
      }}
    </Formik>
  );
}

export default VehicleDetailsForm;
