import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default function DatePicker(props) {
  const { label, handleChange } = props;
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    //handleChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div style={{ width: 200 }}>
        <label>{label}</label>
        <KeyboardDatePicker
          format="dd-MM-yyyy"
          margin="normal"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
}
