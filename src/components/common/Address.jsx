import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Input from "./Input";
import Select from "./Select";
import Countries from "./../../services/countriesService";
import States from "./../../services/statesandcities";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function Address(props) {
  const classes = useStyles();
  const { country, state, city, title, touched, errors, handleChange } = props;
  return (
    <div className={classes.root} style={{ marginTop: 20 }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form>
            {Input(
              "addressLine1",
              "AddressLine1",
              "",
              touched,
              errors,
              handleChange
            )}
            {Input(
              "addressLine2",
              "AddressLine2",
              "",
              touched,
              errors,
              handleChange
            )}

            {Select(
              "Country",
              "Country",
              country,
              Countries,
              touched,
              errors,
              handleChange
            )}
            {Select(
              "State",
              "State",
              state,
              States,
              touched,
              errors,
              handleChange
            )}
            {Select(
              "City",
              "City",
              city,
              States,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "postalCode",
              "PostalCode",
              "",
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
