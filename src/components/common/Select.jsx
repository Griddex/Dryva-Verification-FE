import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default function Select(
  name,
  label,
  value,
  values,
  width,
  errors,
  handleChange
) {
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
        select
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
  );
}
