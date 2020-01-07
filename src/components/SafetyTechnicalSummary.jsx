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
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  }
}));

export default function SafetyTechnicalSummary(props) {
  const {
    values: {
      noOfDefectsOnBus,
      hasSupervisorBeenNotified,
      generalRemarks,
      classes
    },
    errors,
    handleChange
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
              handleChange
            )}

            {Select(
              "hasSupervisorBeenNotified",
              "Has a Supervisor been notified?",
              hasSupervisorBeenNotified,
              ["Yes", "No"],
              100,
              errors,
              handleChange
            )}
            {MultiInput(
              "generalRemarks",
              "General Remarks",
              generalRemarks,
              500,
              errors,
              handleChange
            )}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
