import React from "react";
import Grid from "@material-ui/core/Grid";
import PreSubmitValues from "./../services/preSubmitValuesService";

const ReviseForm = props => {
  const { values } = props;
  console.log("Logged output -->: props", props);
  const {
    values: { Images }
  } = props;
  console.log("Logged output -->: Images", Images);

  const formLastFields = [
    "InspectorsGeneralRemarks",
    "DriversPermanentCity",
    "OwnersNextOfKinName",
    "InsuranceExpiry",
    "OtherEngineFluidLevels",
    "OtherExteriorChecks",
    "OtherInteriorChecks",
    "SafetyTechnicalGeneralRemarks"
  ];

  return (
    <div>
      <br />
      <br />
      <h1>Please review all information before submission</h1>
      <hr />
      <br />
      <Grid container direction="column" spacing={8}>
        {Object.entries(values)
          .filter(v => !["Errors", "Submitting", "Result"].includes(v[0]))
          .map((v, i) => {
            let key = v[0];
            if (key === "Images") v[1] = Images.length;

            return (
              <Grid item key={i}>
                <Grid container direction="row" spacing={4}>
                  <Grid item style={{ fontWeight: "bold" }}>{`${key}: `}</Grid>
                  <Grid item>{`${v[1]}`}</Grid>
                  {/* How to separate key and value with white space, Search for the last items on each form and put in a line break */}
                  {formLastFields.some(v => v === key) ? (
                    <div>
                      <br />
                      <hr />
                      <br />
                    </div>
                  ) : (
                    <h6></h6>
                  )}
                </Grid>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default ReviseForm;
