import React from "react";
import { ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";

export default function Input(name, label, value, width, errors, handleChange) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <TextField
        name={name}
        label=""
        value={value}
        onChange={handleChange}
        error={Boolean(errors[name])}
        margin="normal"
        variant="outlined"
        size="small"
        fullWidth
      />
      <ErrorMessage name={name} component="div" className="invalid-feedback" />
    </div>
  );
}
