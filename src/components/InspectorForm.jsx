import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "./common/Input";
import Select from "./common/Select";
import MultiInput from "./common/MultiInput";
import DatePicker from "./common/DatePicker";
import Grid from "@material-ui/core/Grid";

function InspectorForm(props) {
  const {
    values: {
      NameOfInspector,
      NameOfSupervisor,
      PlaceOfInspection,
      DateOfInspection,
      VehiclePlateNumber,
      InspectionPassed,
      InspectorsGeneralRemarks
    },
    errors,
    touched,
    handleChange,
    handleBlur,
    saveFormValuesInStore
  } = props;

  const useStyles = makeStyles(theme => ({
    "@global": { body: { backgroundColor: "#FFF" } },
    form: {
      display: "flex",
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      flexFlow: "column" || "wrap",
      justifyContent: "flex-start"
    }
  }));

  const classes = useStyles();
  return (
    <Grid container spacing={10} direction="column" justify="flex-start">
      <Grid item>
        {Input(
          "NameOfInspector",
          "Name of Inspector",
          NameOfInspector,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
      <Grid item>
        {Input(
          "NameOfSupervisor",
          "Name of Supervisor",
          NameOfSupervisor,
          400,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
      <Grid item>
        {Input(
          "PlaceOfInspection",
          "Place of Inspection",
          PlaceOfInspection,
          300,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
      <Grid item>
        <DatePicker
          name="dateOfInspection"
          label="Date of Inspection"
          handleBlur={handleBlur}
          handleChange={handleChange}
          saveFormValuesInStore={saveFormValuesInStore}
        />
      </Grid>
      <Grid item>
        {Input(
          "VehiclePlateNumber",
          "Vehicle Plate Number",
          VehiclePlateNumber,
          200,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
      <Grid item>
        {Select(
          "InspectionPassed",
          "Inspection Passed?",
          InspectionPassed,
          ["Yes", "No"],
          100,
          errors,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
      <Grid item>
        {MultiInput(
          "InspectorsGeneralRemarks",
          "Inspector's General Remarks",
          InspectorsGeneralRemarks,
          500,
          errors,
          touched,
          handleChange,
          handleBlur,
          saveFormValuesInStore
        )}
      </Grid>
    </Grid>
  );
}

export default InspectorForm;
