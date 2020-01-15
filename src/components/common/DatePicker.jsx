import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function DatePicker(props) {
  const {
    name,
    label,
    handleChange,
    handleBlur,
    saveFormValuesInStore
  } = props;

  const [date, setDate] = React.useState(new Date());

  const handleDateChange = date => {
    // console.log("Logged output: DatePicker -> date", date);
    setDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div style={{ width: 200 }}>
        <label>{label}</label>
        <KeyboardDatePicker
          name={name}
          format="dd-MM-yyyy"
          margin="normal"
          value={date}
          onChange={date => {
            handleDateChange(date);
            saveFormValuesInStore(name, date);
          }}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}
