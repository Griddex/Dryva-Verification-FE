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

export default function DriversForm(props) {
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
      city
    },
    errors,
    handleChange
  } = props;

  const classes = useStyles();
  return (
    <div className={classes.form}>
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
    </div>
  );
}
