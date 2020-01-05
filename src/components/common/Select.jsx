import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default function Select(
  name,
  label,
  value,
  values,
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
          select
          label=""
          margin="normal"
          variant="outlined"
          value={value}
          onChange={handleChange}
          size="small"
          fullWidth
        >
          {values.map((v, i) => {
            return (
              <MenuItem key={i} value={v}>
                {v}
              </MenuItem>
            );
          })}
        </TextField>
      </div>
    </div>
  );
}
