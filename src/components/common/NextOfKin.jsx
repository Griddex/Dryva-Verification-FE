import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Input from "./Input";
import Select from "./Select";
import MultiInput from "./MultiInput";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function NextOfKin(props) {
  const classes = useStyles();
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [HomeAddress, setHomeAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  const { errors, handleChange } = props;
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
              "firstName",
              "First Name",
              FirstName,
              400,
              errors,
              handleChange
            )}
            {Input(
              "middleName",
              "Middle Name",
              MiddleName,
              400,
              errors,
              handleChange
            )}
            {Input(
              "lastName",
              "Last Name",
              LastName,
              400,
              errors,
              handleChange
            )}
            {Input(
              "homeAddress",
              "Home Address",
              HomeAddress,
              400,
              errors,
              handleChange
            )}
            {Input(
              "phoneNumber",
              "Phone Number",
              PhoneNumber,
              200,
              errors,
              handleChange
            )}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
