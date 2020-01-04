import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import { MenuItem } from "@material-ui/core";

function renderInput(name, label, value, touched, errors, handleChange) {
  return (
    <div style={{ marginTop: 20 }}>
      <label htmlFor={name}>{label}</label>
      <div className="form-group">
        <TextField
          name={name}
          //helperText={touched[name] ? errors[name] : ""}
          error={Boolean(errors[name])}
          label=""
          margin="normal"
          fullWidth
          variant="outlined"
          value={value}
          onChange={handleChange}
          size="small"
        />
        <ErrorMessage
          name={name}
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function renderSelect(name, label, value, touched, errors, handleChange) {
  return (
    <div style={{ marginTop: 20 }}>
      <label htmlFor={name}>{label}</label>
      <div className="form-group">
        <TextField
          name={name}
          //helperText={touched[name] ? errors[name] : ""}
          error={Boolean(errors[name])}
          select
          label=""
          margin="normal"
          variant="outlined"
          value={value}
          onChange={handleChange}
          size="small"
        >
          <MenuItem key={1} value={"Yes"}>
            {"Yes"}
          </MenuItem>
          <MenuItem key={2} value={"No"}>
            {"No"}
          </MenuItem>
        </TextField>
        <ErrorMessage
          name={name}
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

function renderMultilineInput(
  name,
  label,
  value,
  touched,
  errors,
  handleChange
) {
  return (
    <div style={{ marginTop: 20 }}>
      <label htmlFor={name}>{label}</label>
      <div className="form-group">
        <TextField
          name={name}
          //helperText={touched[name] ? errors[name] : ""}
          error={Boolean(errors[name])}
          label=""
          margin="normal"
          fullWidth
          variant="outlined"
          value={value}
          onChange={handleChange}
          multiline
          rows="10"
          size="small"
        />
        <ErrorMessage
          name={name}
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}

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
            {renderInput(
              "nameOfInspector",
              "Name of Inspector",
              nameOfInspector,
              touched,
              errors,
              handleChange
            )}
            {renderInput(
              "nameOfSupervisor",
              "Name of Supervisor",
              nameOfSupervisor,
              touched,
              errors,
              handleChange
            )}
            {renderInput(
              "placeOfInspection",
              "Place of Inspection",
              placeOfInspection,
              touched,
              errors,
              handleChange
            )}
            {renderInput(
              "dateOfInspection",
              "Date of Inspection",
              dateOfInspection,
              touched,
              errors,
              handleChange
            )}
            {renderInput(
              "vehiclePlateNumber",
              "Vehicle Plate Number",
              vehiclePlateNumber,
              touched,
              errors,
              handleChange
            )}
            {renderSelect(
              "inspectionPassed",
              "Inspection Passed?",
              inspectionPassed,
              touched,
              errors,
              handleChange
            )}
            {renderMultilineInput(
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
