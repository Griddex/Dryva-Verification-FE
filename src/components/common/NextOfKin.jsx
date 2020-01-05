import React from "react";
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
  const { touched, errors, handleChange } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Next of Kin</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form>
            {Input(
              "firstName",
              "FirstName",
              "First Name",
              touched,
              errors,
              handleChange
            )}
            {Input(
              "middleName",
              "MiddleName",
              "Middle Name",
              touched,
              errors,
              handleChange
            )}

            {Input(
              "lastName",
              "LastName",
              "Last Name",
              touched,
              errors,
              handleChange
            )}

            {MultiInput(
              "homeAddress",
              "HomeAddress",
              "Home Address",
              touched,
              errors,
              handleChange
            )}

            {Input(
              "phoneNumber",
              "PhoneNumber",
              "Phone Number",
              touched,
              errors,
              handleChange
            )}
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
