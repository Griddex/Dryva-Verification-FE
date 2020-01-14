import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Input from "./../components/common/Input";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold
  }
}));

export default function DriverPersonalDetails(props) {
  const classes = useStyles();
  const {
    driversFirstName,
    driversMiddleName,
    driversSurname,
    driversMobile,
    driversEmail,
    driversLicenseNo,
    errors,
    touched,
    handleChange,
    handleBlur
  } = props;

  return (
    <div style={{ marginTop: 20 }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Driver's Personal Details
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            {Input(
              "driversFirstName",
              "Driver's First Name",
              driversFirstName,
              400,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              "driversMiddleName",
              "Driver's Middle Name",
              driversMiddleName,
              400,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              "driversSurname",
              "Driver's Surname",
              driversSurname,
              400,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              "driversMobile",
              "Driver's Mobile Number",
              driversMobile,
              200,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              "driversEmail",
              "Driver's Email",
              driversEmail,
              300,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              "driversLicenseNo",
              "Driver's License Number",
              driversLicenseNo,
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
