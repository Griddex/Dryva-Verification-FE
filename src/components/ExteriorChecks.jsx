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

export default function ExteriorChecks() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    HeadlightsHiLow: false,
    FoglampsHazardlamps: false,
    WindshieldCondition: false,
    DirectionalSignalsFrontrear: false,
    TaillightsRunninglights: false,
    BrakelightsBackUpLights: false,
    TireconditionAirpressure: false,
    LugnutsTight: false,
    WindowscanWindfreely: false,
    LuggageStoragedoorsEnginecompartmentPanels: false,
    ExteriorClean: false,
    BodyconditionScratchesDingsDents: false,
    OtherExteriorChecks: ""
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
          <Typography className={classes.heading}>Exterior Checks</Typography>
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
                    checked={state.HeadlightsHiLow}
                    onChange={handleChange("HeadlightsHiLow")}
                    value="HeadlightsHiLow"
                  />
                }
                label="Headlights (hi/low)"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.FoglampsHazardlamps}
                    onChange={handleChange("FoglampsHazardlamps")}
                    value="FoglampsHazardlamps"
                  />
                }
                label="Fog lamps/hazard lamps"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.WindshieldCondition}
                    onChange={handleChange("WindshieldCondition")}
                    value="WindshieldCondition"
                  />
                }
                label="Windshield condition"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.DirectionalSignalsFrontrear}
                    onChange={handleChange("DirectionalSignalsFrontrear")}
                    value="DirectionalSignalsFrontrear"
                  />
                }
                label="Directional Signals front/rear"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.TaillightsRunninglights}
                    onChange={handleChange("TaillightsRunninglights")}
                    value="TaillightsRunninglights"
                  />
                }
                label="Tail lights/running lights"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.BrakelightsBackUpLights}
                    onChange={handleChange("BrakelightsBackUpLights")}
                    value="BrakelightsBackUpLights"
                  />
                }
                label="Brake lights/Back-Up Lights"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.TireconditionAirpressure}
                    onChange={handleChange("TireconditionAirpressure")}
                    value="TireconditionAirpressure"
                  />
                }
                label="Tire condition/air pressure"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.LugnutsTight}
                    onChange={handleChange("LugnutsTight")}
                    value="LugnutsTight"
                  />
                }
                label="Lug nuts tight?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.WindowscanWindfreely}
                    onChange={handleChange("WindowscanWindfreely")}
                    value="WindowscanWindfreely"
                  />
                }
                label=" Windows can wind freely?"
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
                    checked={state.LuggageStoragedoorsEnginecompartmentPanels}
                    onChange={handleChange(
                      "LuggageStoragedoorsEnginecompartmentPanels"
                    )}
                    value="LuggageStoragedoorsEnginecompartmentPanels"
                  />
                }
                label="Luggage storage doors and engine compartment panels"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.ExteriorClean}
                    onChange={handleChange("ExteriorClean")}
                    value="ExteriorClean"
                  />
                }
                label="Exterior clean?"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.BodyconditionScratchesDingsDents}
                    onChange={handleChange("BodyconditionScratchesDingsDents")}
                    value="BodyconditionScratchesDingsDents"
                  />
                }
                label="Body condition/scratches/dings/dents "
              />

              <div style={{ marginTop: 20 }}>
                <label htmlFor={state.OtherExteriorChecks}>Other</label>
                <div className="form-group">
                  <TextField
                    name={state.OtherExteriorChecks}
                    label=""
                    margin="normal"
                    fullWidth
                    variant="outlined"
                    value={state.OtherExteriorChecks}
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
