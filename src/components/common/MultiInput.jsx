import React from "react";
import { ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";

export default function MultiInput(
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
