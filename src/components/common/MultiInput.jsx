import React from "react";
import { ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";

export default function MultiInput(
  name,
  label,
  value,
  width,
  errors,
  touched,
  handleChange,
  handleBlur
) {
  return (
    <div style={{ marginTop: 20, width: width }}>
      <label htmlFor={name}>{label}</label>
      <div className="form-group">
        <TextField
          name={name}
          label=""
          value={value}
          onChange={handleChange}
          error={Boolean(errors[name] && touched[name])}
          margin="normal"
          variant="outlined"
          rows="10"
          size="small"
          multiline
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
