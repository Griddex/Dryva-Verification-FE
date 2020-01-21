import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

const CheckBox = props => {
  const { name, label, saveLoginValuesInStore } = props;
  const [checkBoxValue, setcheckBoxValue] = useState(false);

  const handleChange = name => e => {
    const value = e.target.checked;
    setcheckBoxValue(value);
    saveLoginValuesInStore(name, value);
  };

  return (
    <div>
      <Checkbox
        name={name}
        checked={checkBoxValue}
        onChange={handleChange(name)}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckBox;
