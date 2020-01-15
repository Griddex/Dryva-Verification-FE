import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Input from "./common/Input";
import Select from "./common/Select";
import MultiInput from "./common/MultiInput";

const useStyles = makeStyles(theme => ({
  "@global": { body: { backgroundColor: "#FFF" } },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(10)
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold
  }
}));

export default function SafetyTechnicalSummary(props) {
  const {
    values: { noOfDefectsOnBus, hasSupervisorBeenNotified, generalRemarks },
    errors,
    touched,
    handleBlur,
    handleChange,
    saveFormValuesInStore
  } = props;

  const classes = useStyles();
  return (
    <div className={classes.root} style={{ marginTop: 30 }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Summary</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{ width: "80%" }} className={classes.form}>
            {Input(
              "noOfDefectsOnBus",
              "Number of Defects on Bus",
              noOfDefectsOnBus,
              100,
              errors,
              touched,
              handleChange,
              handleBlur,
              saveFormValuesInStore
            )}

            {Select(
              "hasSupervisorBeenNotified",
              "Has a Supervisor been notified?",
              hasSupervisorBeenNotified,
              ["Yes", "No"],
              100,
              errors,
              handleChange,
              handleBlur,
              saveFormValuesInStore
            )}
            {MultiInput(
              "generalRemarks",
              "General Remarks",
              generalRemarks,
              500,
              errors,
              touched,
              handleChange,
              handleBlur,
              saveFormValuesInStore
            )}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
