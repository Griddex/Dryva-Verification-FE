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
  handleChange,
  handleBlur,
  saveFormValuesInStore = null
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
          }}
          //error={Boolean(errors[name])}
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
    </div>
  );
}
