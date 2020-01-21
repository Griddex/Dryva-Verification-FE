import React from "react";
import { ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";

export default function Input(
  name,
  label,
  value,
  width,
  errors,
  touched,
  handleChange,
  handleBlur,
  saveFormValuesInStore = null,
  type = null,
  saveLoginValuesInStore = null
) {
  return (
    <div>
      <div style={{ width: width }}>
        <label htmlFor={name}>{label}</label>
        <TextField
          name={name}
          label=""
          value={value}
          onChange={handleChange}
          onBlur={e => {
            handleBlur(e);
            let inputValue = e.target.value;
            let inputName = e.target.name;
            if (inputValue !== "") saveFormValuesInStore(inputName, inputValue);
            if (inputValue !== "")
              saveLoginValuesInStore(inputName, inputValue);
          }}
          error={Boolean(errors[name] && touched[name])}
          margin="normal"
          variant="outlined"
          size="small"
          type={type}
          fullWidth
        />
      </div>
      <ErrorMessage
        style={{ color: "#DE1A1A" }}
        name={name}
        component="div"
        className="invalid-feedback"
      />
    </div>
  );
}
