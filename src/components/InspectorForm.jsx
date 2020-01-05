import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
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

function InspectorForm() {
  const classes = useStyles();
  return (
    <Formik
      className={classes.form}
      initialValues={{
        nameOfInspector: "",
        nameOfSupervisor: "",
        placeOfInspection: "",
        dateOfInspection: "",
        vehiclePlateNumber: "",
        inspectionPassed: "No",
        generalRemarks: "",
        classes
      }}
      validationSchema={Yup.object().shape({
        nameOfInspector: Yup.string().required("Inspector's name is required"),
        nameOfSupervisor: Yup.string().required(
          "Supervisor's name is required"
        ),
        placeOfInspection: Yup.string().required(
          "Place of inspection is required"
        ),
        dateOfInspection: Yup.string().required(
          "Date of inspection is required"
        ),
        vehiclePlateNumber: Yup.string().required(
          "Vehicle plate number is required"
        )
      })}
    >
      {props => {
        const {
          values: {
            nameOfInspector,
            nameOfSupervisor,
            placeOfInspection,
            dateOfInspection,
            vehiclePlateNumber,
            inspectionPassed,
            generalRemarks,
            classes
          },
          errors,
          touched,
          handleChange
        } = props;

        return (
          <Form style={{ width: "80%" }} className={classes.form}>
            {Input(
              "nameOfInspector",
              "Name of Inspector",
              nameOfInspector,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "nameOfSupervisor",
              "Name of Supervisor",
              nameOfSupervisor,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "placeOfInspection",
              "Place of Inspection",
              placeOfInspection,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "dateOfInspection",
              "Date of Inspection",
              dateOfInspection,
              touched,
              errors,
              handleChange
            )}
            {Input(
              "vehiclePlateNumber",
              "Vehicle Plate Number",
              vehiclePlateNumber,
              touched,
              errors,
              handleChange
            )}
            {Select(
              "inspectionPassed",
              "Inspection Passed?",
              inspectionPassed,
              ["Yes", "No"],
              touched,
              errors,
              handleChange
            )}
            {MultiInput(
              "generalRemarks",
              "General Remarks",
              generalRemarks,
              touched,
              errors,
              handleChange
            )}
          </Form>
        );
      }}
    </Formik>
  );
}

export default InspectorForm;
