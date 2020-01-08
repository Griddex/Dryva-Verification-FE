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

export default function InteriorChecks(props) {
  const {
    values: {
      Mirrors,
      WindshieldWipers,
      Horn,
      ParkingBrake,
      Fans,
      AirConditioning,
      RadioEquipmentCellphone,
      CantheDoorsbeOpenedFreely,
      FluidsLeakingUnderBus,
      InteriorLights,
      DriverSeatBelts,
      PassengerSeats,
      FireExtinguisher,
      OtherEmergencyGear,
      DestinationSignbox,
      WindowsCleanandcanWindFreely,
      InteriorClean,
      WastebinAvailableOrEmptied,
      OtherInteriorChecks
    },
    handleChange
  } = props;

  const classes = useStyles();
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
                    checked={Mirrors}
                    onChange={handleChange("Mirrors")}
                    value="Mirrors"
                  />
                }
                label="Mirrors"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={WindshieldWipers}
                    onChange={handleChange("WindshieldWipers")}
                    value="WindshieldWipers"
                  />
                }
                label="Windshield Wipers"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Horn}
                    onChange={handleChange("Horn")}
                    value="Horn"
                  />
                }
                label="Horn"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={ParkingBrake}
                    onChange={handleChange("ParkingBrake")}
                    value="ParkingBrake"
                  />
                }
                label="Parking Brake"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Fans}
                    onChange={handleChange("Fans")}
                    value="Fans"
                  />
                }
                label="Fans"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={AirConditioning}
                    onChange={handleChange("AirConditioning")}
                    value="AirConditioning"
                  />
                }
                label="Air Conditioning"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={RadioEquipmentCellphone}
                    onChange={handleChange("RadioEquipmentCellphone")}
                    value="RadioEquipmentCellphone"
                  />
                }
                label="Radio Equipment / Cellphone"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={CantheDoorsbeOpenedFreely}
                    onChange={handleChange("CantheDoorsbeOpenedFreely")}
                    value="CantheDoorsbeOpenedFreely"
                  />
                }
                label="Radiator Fluid Level"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={FluidsLeakingUnderBus}
                    onChange={handleChange("FluidsLeakingUnderBus")}
                    value="FluidsLeakingUnderBus"
                  />
                }
                label="Fluids Leaking Under Bus?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={InteriorLights}
                    onChange={handleChange("InteriorLights")}
                    value="InteriorLights"
                  />
                }
                label="Interior Lights"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={DriverSeatBelts}
                    onChange={handleChange("DriverSeatBelts")}
                    value="DriverSeatBelts"
                  />
                }
                label="Driver Seat and Belts"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={PassengerSeats}
                    onChange={handleChange("PassengerSeats")}
                    value="PassengerSeats"
                  />
                }
                label="Passenger Seats"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={FireExtinguisher}
                    onChange={handleChange("FireExtinguisher")}
                    value="FireExtinguisher"
                  />
                }
                label="Fire Extinguisher"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={OtherEmergencyGear}
                    onChange={handleChange("OtherEmergencyGear")}
                    value="OtherEmergencyGear"
                  />
                }
                label="Other Emergency Gear"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={DestinationSignbox}
                    onChange={handleChange("DestinationSignbox")}
                    value="DestinationSignbox"
                  />
                }
                label="Destination Signbox?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={WindowsCleanandcanWindFreely}
                    onChange={handleChange("WindowsCleanandcanWindFreely")}
                    value="WindowsCleanandcanWindFreely"
                  />
                }
                label="Windows Clean and can wind freely?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={InteriorClean}
                    onChange={handleChange("InteriorClean")}
                    value="InteriorClean"
                  />
                }
                label="Interior Clean?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={WastebinAvailableOrEmptied}
                    onChange={handleChange("WastebinAvailableOrEmptied")}
                    value="WastebinAvailableOrEmptied"
                  />
                }
                label="Waste bin available/emptied?"
              />

              <div style={{ marginTop: 20 }}>
                <label htmlFor={OtherInteriorChecks}>Other</label>
                <div className="form-group">
                  <TextField
                    name={OtherInteriorChecks}
                    label=""
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    value={OtherInteriorChecks}
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
