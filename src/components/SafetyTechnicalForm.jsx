import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import EngineFluidLevels from "./EngineFluidLevels";
import InteriorChecks from "./InteriorChecks";
import ExteriorChecks from "./ExteriorChecks";
import SafetyTechnicalSummary from "./SafetyTechnicalSummary";
import VerificationImages from "./VerificationImagesForm";

const useStyles = makeStyles(theme => ({
  "@global": { body: { backgroundColor: "#FFF" } },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  }
}));

function SafetyTechnicalForm(props) {
  return (
    <Container>
      <EngineFluidLevels {...props} />
      <InteriorChecks {...props} />
      <ExteriorChecks {...props} />
      <SafetyTechnicalSummary {...props} />
      <VerificationImages {...props} />
    </Container>
  );
}

export default SafetyTechnicalForm;
