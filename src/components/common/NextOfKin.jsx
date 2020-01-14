import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Input from "./Input";
import Select from "./Select";
import Countries from "./../../services/countriesService";
import States from "../../services/statesService";
import Cities from "./../../services/citiesService";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold
  }
}));

export default function NextOfKin(props) {
  const classes = useStyles();
  const {
    nextOfKinFirstName,
    nextOfKinMiddleName,
    nextOfKinLastName,
    nextOfKinPhoneNumber,
    nextOfKinHomeCountry,
    nextOfKinHomeState,
    nextOfKinHomeCity,
    nextOfKinHomeAddressLine1,
    nextOfKinHomeAddressLine2,
    nextOfKinHomePostalCode,
    errors,
    touched,
    handleChange,
    handleBlur
  } = props;

  return (
    <div className={classes.root} style={{ marginTop: 20 }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Next of Kin</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            {Input(
              "nextOfKinFirstName",
              "First Name",
              nextOfKinFirstName,
              400,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              "nextOfKinMiddleName",
              "Middle Name",
              nextOfKinMiddleName,
              400,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              "nextOfKinLastName",
              "Last Name",
              nextOfKinLastName,
              400,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              "nextOfKinHomeAddressLine1",
              "Address Line1",
              nextOfKinHomeAddressLine1,
              450,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              "nextOfKinHomeAddressLine2",
              "Address Line2",
              nextOfKinHomeAddressLine2,
              450,
              errors,
              touched,
              handleChange,
              handleBlur
            )}

            {Select(
              "nextOfKinHomeCountry",
              "Country",
              nextOfKinHomeCountry,
              Countries,
              220,
              errors,
              handleChange
            )}
            {Select(
              "nextOfKinHomeState",
              "State",
              nextOfKinHomeState,
              States,
              220,
              errors,
              handleChange
            )}
            {Select(
              "nextOfKinHomeCity",
              "City",
              nextOfKinHomeCity,
              Cities,
              200,
              errors,
              handleChange
            )}
            {Input(
              "nextOfKinHomePostalCode",
              "PostalCode",
              nextOfKinHomePostalCode,
              150,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              "nextOfKinPhoneNumber",
              "Phone Number",
              nextOfKinPhoneNumber,
              200,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
