import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Input from "./common/Input";
import Select from "./common/Select";
import MultiInput from "./common/MultiInput";
import NextOfKin from "./common/NextOfKin";
import Address from "./common/Address";
import DatePicker from "./common/DatePicker";

const useStyles = makeStyles(theme => ({
  "@global": { body: { backgroundColor: "#FFF" } },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  }
}));

function DriversForm() {
  const classes = useStyles();
  return (
    <Formik
      className={classes.form}
      initialValues={{
        driversFirstName: "",
        driversMiddleName: "",
        driversSurname: "",
        driversMobile: "",
        driversEmail: "",
        driversLicenseNo: "",
        driversLicenseExpiryDate: "",
        country: "Nigeria",
        state: "Akwa Ibom",
        city: "Uyo",
        classes
      }}
      validationSchema={Yup.object().shape({
        driversFirstName: Yup.string().required(
          "Drver's first name is required"
        ),
        driversSurname: Yup.string().required("Drver's Surname is required"),
        driversMobile: Yup.string().required(
          "Driver's mobile phone number is required"
        ),
        driversEmail: Yup.string().required(
          "Driver's email address is required"
        ),
        driversLicenseNo: Yup.string().required(
          "Driver's License number is required"
        ),
        driversLicenseExpiryDate: Yup.string().required(
          "Driver's license expiry date is required"
        )
      })}
    >
      {props => {
        const {
          values: {
            driversFirstName,
            driversMiddleName,
            driversSurname,
            driversMobile,
            driversEmail,
            driversLicenseNo,
            driversLicenseExpiryDate,
            classes
          },
          errors,
          touched,
          handleChange
        } = props;

        return (
          <Form style={{ width: "80%" }} className={classes.form}>
            {Input(
              "driversFirstName",
              "Driver's First Name",
              driversFirstName,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "driversMiddleName",
              "Driver's Middle Name",
              driversMiddleName,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "driversSurname",
              "Driver's Surname",
              driversSurname,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "driversMobile",
              "Driver's Mobile Number",
              driversMobile,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "driversEmail",
              "Driver's Email",
              driversEmail,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "driversLicenseNo",
              "Driver's License Number",
              driversLicenseNo,
              touched,
              errors,
              handleChange
            )}
            {/* <DatePicker /> */}
            <NextOfKin title="Next of Kin" errors touched handleChange />
            <Address
              country
              state
              city
              title="Home Address"
              errors
              touched
              handleChange
            />
            <Address
              country
              state
              city
              title="Permanent Address"
              errors
              touched
              handleChange
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default DriversForm;
