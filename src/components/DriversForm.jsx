import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Input from "./common/Input";
import NextOfKin from "./common/NextOfKin";
import Address from "./common/Address";
import DatePicker from "./common/DatePicker";
import Container from "@material-ui/core/Container";
import DriverPersonalDetails from "./DriverPersonalDetails";

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
        addressLine1: "",
        addressLine2: "",
        postalCode: "",
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
        ),
        addressLine1: Yup.string().required("Driver's address is required")
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
            addressLine1,
            addressLine2,
            postalCode,
            country,
            state,
            city,
            classes
          },
          errors,
          handleChange
        } = props;

        return (
          <Form className={classes.form}>
            <DriverPersonalDetails
              driversFirstName={driversFirstName}
              driversMiddleName={driversMiddleName}
              driversSurname={driversSurname}
              driversMobile={driversMobile}
              driversEmail={driversEmail}
              driversLicenseNo={driversLicenseNo}
              driversLicenseExpiryDate={driversLicenseExpiryDate}
              errors={errors}
              handleChange={handleChange}
            />
            <NextOfKin
              title="Next of Kin"
              errors={errors}
              handleChange={handleChange}
            />
            <Address
              title="Home Address"
              country={country}
              state={state}
              city={city}
              addressLine1={addressLine1}
              addressLine2={addressLine2}
              postalCode={postalCode}
              errors={errors}
              handleChange={handleChange}
            />
            <Address
              title="Permanent Address"
              country={country}
              state={state}
              city={city}
              addressLine1={addressLine1}
              addressLine2={addressLine2}
              postalCode={postalCode}
              errors={errors}
              handleChange={handleChange}
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default DriversForm;
