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
import States from "../../services/statesService";
import Cities from "./../../services/citiesService";

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
  const {
    country,
    state,
    city,
    addressLine1,
    addressLine2,
    postalCode,
    title,
    errors,
    handleChange
  } = props;
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
          <div>
            {Input(
              "addressLine1",
              "AddressLine1",
              addressLine1,
              500,
              errors,
              handleChange
            )}
            {Input(
              "addressLine2",
              "AddressLine2",
              addressLine2,
              500,
              errors,
              handleChange
            )}

            {Select(
              "Country",
              "Country",
              country,
              Countries,
              150,
              errors,
              handleChange
            )}
            {Select("State", "State", state, States, 150, errors, handleChange)}
            {Select("City", "City", city, Cities, 200, errors, handleChange)}
            {Input(
              "postalCode",
              "PostalCode",
              postalCode,
              150,
              errors,
              handleChange
            )}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
