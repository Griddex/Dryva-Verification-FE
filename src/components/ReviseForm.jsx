import React from "react";
import Grid from "@material-ui/core/Grid";
import PreSubmitValues from "./../services/preSubmitValuesService";

const ReviseForm = props => {
  const { values } = props;
  const {
    values: { Images }
  } = props;

  const formLastFields = [
    "General Remarks",
    "PostalCode",
    "Owner's Next-Of-Kin Name",
    "Insurance Expiry",
    "Other Engine Fluid Levels",
    "Other Exterior Checks",
    "Other Interior Checks",
    "Has Supervisor Been Notified?"
  ];

  return (
    <div>
      <br />
      <br />
      <h1>Please review information before submission</h1>
      <Grid container direction="column" spacing={8}>
        {Object.entries(values)
          .filter(v => v[0] !== "errors")
          .map((v, i) => {
            let key = PreSubmitValues[v[0]];
            if (key === "Verification Images") v[1] = Images.length;

            return (
              <Grid item key={i}>
                <Grid container direction="row" spacing={4}>
                  <Grid item style={{ fontWeight: "bold" }}>{`${key}: `}</Grid>
                  <Grid item>{`${v[1]}`}</Grid>
                  {/* How to separate key and value with white space, Search for the last items on each form and put in a line break */}
                  {formLastFields.some(v => v === key) ? <br /> : <h6></h6>}
                </Grid>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default ReviseForm;
