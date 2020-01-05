import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function InteriorChecks() {
  const classes = useStyles();
  //const { touched, errors, handleChange } = props;
  const [state, setState] = React.useState({
    Mirrors: false,
    WindshieldWipers: false,
    Horn: false,
    ParkingBrake: false,
    Fans: false,
    AirConditioning: false,
    RadioEquipmentCellphone: false,
    CantheDoorsbeOpenedFreely: false,
    InteriorLights: false,
    DriverSeatBelts: false,
    PassengerSeats: false,
    FireExtinguisher: false,
    OtherEmergencyGear: false,
    DestinationSignbox: false,
    WindowsCleanandcanWindFreely: false,
    InteriorClean: false,
    WastebinAvailableOrEmptied: false,
    OtherInteriorChecks: ""
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className={classes.root} style={{ marginTop: 20 }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Interior Checks</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.Mirrors}
                    onChange={handleChange("Mirrors")}
                    value="Mirrors"
                  />
                }
                label="Mirrors"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.WindshieldWipers}
                    onChange={handleChange("WindshieldWipers")}
                    value="WindshieldWipers"
                  />
                }
                label="Windshield Wipers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.Horn}
                    onChange={handleChange("Horn")}
                    value="Horn"
                  />
                }
                label="Horn"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.ParkingBrake}
                    onChange={handleChange("ParkingBrake")}
                    value="ParkingBrake"
                  />
                }
                label="Parking Brake"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.Fans}
                    onChange={handleChange("Fans")}
                    value="Fans"
                  />
                }
                label="Fans"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.AirConditioning}
                    onChange={handleChange("AirConditioning")}
                    value="AirConditioning"
                  />
                }
                label="Air Conditioning"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.RadioEquipmentCellphone}
                    onChange={handleChange("RadioEquipmentCellphone")}
                    value="RadioEquipmentCellphone"
                  />
                }
                label="Radio Equipment / Cellphone"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.CantheDoorsbeOpenedFreely}
                    onChange={handleChange("CantheDoorsbeOpenedFreely")}
                    value="CantheDoorsbeOpenedFreely"
                  />
                }
                label="Radiator Fluid Level"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.FluidsLeakingUnderBus}
                    onChange={handleChange("FluidsLeakingUnderBus")}
                    value="FluidsLeakingUnderBus"
                  />
                }
                label="Can the Doors be  opened freely? "
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.InteriorLights}
                    onChange={handleChange("InteriorLights")}
                    value="InteriorLights"
                  />
                }
                label="Interior Lights"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.DriverSeatBelts}
                    onChange={handleChange("DriverSeatBelts")}
                    value="DriverSeatBelts"
                  />
                }
                label="Driver Seat and Belts"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.PassengerSeats}
                    onChange={handleChange("PassengerSeats")}
                    value="PassengerSeats"
                  />
                }
                label="Passenger Seats"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.FireExtinguisher}
                    onChange={handleChange("FireExtinguisher")}
                    value="FireExtinguisher"
                  />
                }
                label="Fire Extinguisher"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.OtherEmergencyGear}
                    onChange={handleChange("OtherEmergencyGear")}
                    value="OtherEmergencyGear"
                  />
                }
                label="Other Emergency Gear"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.DestinationSignbox}
                    onChange={handleChange("DestinationSignbox")}
                    value="DestinationSignbox"
                  />
                }
                label="Destination Signbox?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.WindowsCleanandcanWindFreely}
                    onChange={handleChange("WindowsCleanandcanWindFreely")}
                    value="WindowsCleanandcanWindFreely"
                  />
                }
                label="Windows Clean and can wind freely?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.InteriorClean}
                    onChange={handleChange("InteriorClean")}
                    value="InteriorClean"
                  />
                }
                label="Interior Clean?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.WastebinAvailableOrEmptied}
                    onChange={handleChange("WastebinAvailableOrEmptied")}
                    value="WastebinAvailableOrEmptied"
                  />
                }
                label="Waste bin available/emptied?"
              />

              <div style={{ marginTop: 20 }}>
                <label htmlFor={state.OtherInteriorChecks}>Other</label>
                <div className="form-group">
                  <TextField
                    name={state.OtherInteriorChecks}
                    label=""
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    value={state.OtherInteriorChecks}
                    onChange={handleChange}
                    multiline
                    rows="10"
                    size="small"
                  />
                </div>
              </div>
            </FormGroup>
          </FormControl>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
