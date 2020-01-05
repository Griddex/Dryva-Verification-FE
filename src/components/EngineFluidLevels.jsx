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
  },
  expander: {
    marginTop: 30
  }
}));

export default function EngineFluidLevels() {
  const classes = useStyles();
  //const { touched, errors, handleChange } = props;
  const [state, setState] = React.useState({
    FuelGaugeWorking: false,
    OilLevelPressureGaugeWorking: false,
    TransmissionFluidLevel: false,
    PowerSteeringFluidLevel: false,
    BrakeFluidLevel: false,
    BatteryCharge: false,
    WindshieldWiperFluid: false,
    RadiatorFluidLevel: false,
    FluidsLeakingUnderBus: false,
    EngineWarningLights: false,
    OtherEngineFluidLevels: false,
    OtherEngineFluidLevels: ""
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className={classes.root} style={{ marginTop: 30 }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Engine/Fluid Levels
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.FuelGaugeWorking}
                    onChange={handleChange("FuelGaugeWorking")}
                    value="FuelGaugeWorking"
                  />
                }
                label="Fuel gauge working?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.OilLevelPressureGaugeWorking}
                    onChange={handleChange("OilLevelPressureGaugeWorking")}
                    value="OilLevelPressureGaugeWorking"
                  />
                }
                label="Oil Level/Pressure gauge working?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.TransmissionFluidLevel}
                    onChange={handleChange("TransmissionFluidLevel")}
                    value="TransmissionFluidLevel"
                  />
                }
                label="Transmission Fluid Level"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.PowerSteeringFluidLevel}
                    onChange={handleChange("PowerSteeringFluidLevel")}
                    value="PowerSteeringFluidLevel"
                  />
                }
                label="Power Steering Fluid Level"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.BrakeFluidLevel}
                    onChange={handleChange("BrakeFluidLevel")}
                    value="BrakeFluidLevel"
                  />
                }
                label="Brake Fluid Level"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.BatteryCharge}
                    onChange={handleChange("BatteryCharge")}
                    value="BatteryCharge"
                  />
                }
                label="Battery Charge"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.WindshieldWiperFluid}
                    onChange={handleChange("WindshieldWiperFluid")}
                    value="WindshieldWiperFluid"
                  />
                }
                label="Windshield Wiper Fluid?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.RadiatorFluidLevel}
                    onChange={handleChange("RadiatorFluidLevel")}
                    value="RadiatorFluidLevel"
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
                label="Fluids Leaking Under Bus?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.EngineWarningLights}
                    onChange={handleChange("EngineWarningLights")}
                    value="EngineWarningLights"
                  />
                }
                label="Engine Warning Lights"
              />

              <div style={{ marginTop: 20 }}>
                <label htmlFor={state.OtherEngineFluidLevels}>Other</label>
                <div className="form-group">
                  <TextField
                    name={state.OtherEngineFluidLevels}
                    label=""
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    value={state.OtherEngineFluidLevels}
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
