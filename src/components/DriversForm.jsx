import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Input from "./common/Input";
import NextOfKin from "./common/NextOfKin";
import Address from "./common/Address";
import DriverPersonalDetails from "./DriverPersonalDetails";

const useStyles = makeStyles(theme => ({
  "@global": { body: { backgroundColor: "#FFF" } },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  }
}));

export default function DriversForm(formikProps) {
  const {
    values: {
      driversFirstName,
      driversMiddleName,
      driversSurname,
      driversMobile,
      driversEmail,
      driversLicenseNo,
      driversLicenseExpiryDate,

      driversHomeAddressLine1,
      driversHomeAddressLine2,
      driversHomePostalCode,
      driversHomeCountry,
      driversHomeState,
      driversHomeCity,

      driversPermanentAddressLine1,
      driversPermanentAddressLine2,
      driversPermanentPostalCode,
      driversPermanentCountry,
      driversPermanentState,
      driversPermanentCity,

      //Next of Kin
      nextOfKinFirstName,
      nextOfKinMiddleName,
      nextOfKinLastName,
      nextOfKinPhoneNumber,

      nextOfKinHomeAddressLine1,
      nextOfKinHomeAddressLine2,
      nextOfKinHomePostalCode,
      nextOfKinHomeCountry,
      nextOfKinHomeState,
      nextOfKinHomeCity
    },
    errors,
    handleChange,
    touched,
    handleBlur
  } = formikProps;

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
        touched={touched}
        handleBlur={handleBlur}
      />

      <Address
        title="Home Address"
        addressLine1Name="driversHomeAddressLine1Name"
        addressLine2Name="driversHomeAddressLine2Name"
        countryName="driversHomeCountryName"
        stateName="driversHomeStateName"
        cityName="driversHomeCityName"
        postalCodeName="driversHomePostalCodeName"
        country={driversHomeCountry}
        state={driversHomeState}
        city={driversHomeCity}
        addressLine1={driversHomeAddressLine1}
        addressLine2={driversHomeAddressLine2}
        postalCode={driversHomePostalCode}
        errors={errors}
        handleChange={handleChange}
        touched={touched}
        handleBlur={handleBlur}
      />
      <Address
        title="Permanent Address"
        addressLine1Name="driversPermanentAddressLine1Name"
        addressLine2Name="driversPermanentAddressLine2Name"
        countryName="driversPermanentCountryName"
        stateName="driversPermanentStateName"
        cityName="driversPermanentCityName"
        postalCodeName="driversPermanentPostalCodeName"
        country={driversPermanentCountry}
        state={driversPermanentState}
        city={driversPermanentCity}
        addressLine1={driversPermanentAddressLine1}
        addressLine2={driversPermanentAddressLine2}
        postalCode={driversPermanentPostalCode}
        errors={errors}
        handleChange={handleChange}
        touched={touched}
        handleBlur={handleBlur}
      />
      <NextOfKin
        title="Next of Kin"
        nextOfKinFirstName={nextOfKinFirstName}
        nextOfKinMiddleName={nextOfKinMiddleName}
        nextOfKinLastName={nextOfKinLastName}
        nextOfKinPhoneNumber={nextOfKinPhoneNumber}
        nextOfKinHomeCountry={nextOfKinHomeCountry}
        nextOfKinHomeState={nextOfKinHomeState}
        nextOfKinHomeCity={nextOfKinHomeCity}
        nextOfKinHomeAddressLine1={nextOfKinHomeAddressLine1}
        nextOfKinHomeAddressLine2={nextOfKinHomeAddressLine2}
        nextOfKinHomePostalCode={nextOfKinHomePostalCode}
        errors={errors}
        handleChange={handleChange}
        touched={touched}
        handleBlur={handleBlur}
      />
    </div>
  );
}
