import React from "react";
import { ErrorMessage } from "formik";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "react-select";

export default function AsyncSelect(name, label, value, values) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
  };
  return (
    <div style={{ marginTop: 20 }}>
      <label htmlFor={name}>{label}</label>
      <div className="form-group">
        <Select
          name={name}
          value={selectedOption}
          onChange={handleChange}
          options={values.map((v, i) => ({ label: v, value: i }))}
          isSearchable
        />
      </div>
    </div>
  );
}
