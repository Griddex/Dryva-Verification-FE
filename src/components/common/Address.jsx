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
    fontWeight: theme.typography.fontWeightBold
  }
}));

export default function Address(props) {
  const classes = useStyles();
  const {
    addressLine1Name,
    addressLine2Name,
    countryName,
    stateName,
    cityName,
    postalCodeName,
    country,
    state,
    city,
    addressLine1,
    addressLine2,
    postalCode,
    title,
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
          <Typography className={classes.heading}>{title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            {Input(
              addressLine1Name,
              "Address Line1",
              addressLine1,
              450,
              errors,
              touched,
              handleChange,
              handleBlur
            )}
            {Input(
              addressLine2Name,
              "Address Line2",
              addressLine2,
              450,
              errors,
              touched,
              handleChange,
              handleBlur
            )}

            {Select(
              countryName,
              "Country",
              country,
              Countries,
              220,
              errors,
              handleChange
            )}
            {Select(
              stateName,
              "State",
              state,
              States,
              220,
              errors,
              handleChange
            )}
            {Select(cityName, "City", city, Cities, 200, errors, handleChange)}
            {Input(
              postalCodeName,
              "PostalCode",
              postalCode,
              150,
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
