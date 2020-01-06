import React from "react";
import { ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";

export default function Input(name, label, value, width, errors, handleChange) {
  return (
    <div style={{ marginTop: 20, width: width }}>
      <label htmlFor={name}>{label}</label>
      <div className="form-group">
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
        <ErrorMessage
          name={name}
          component="div"
          className="invalid-feedback"
        />
      </div>
    </div>
  );
}
