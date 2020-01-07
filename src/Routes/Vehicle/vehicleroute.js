import React from "react";
import Formik from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Container from "@material-ui/core/Container";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InspectorForm from "./../../components/InspectorForm";
import OwnersForm from "./../../components/OwnersForm";
import DriversForm from "./../../components/DriversForm";
import VehicleDetailsForm from "./../../components/VehicleDetailsForm";
import SafetyTechnicalForm from "./../../components/SafetyTechnicalForm";
import { CssBaseline } from "@material-ui/core";
import StoreInitialValues from "./../../store/store";
import ValidationSchema from "./../../ValidationSchema/validationSchema";
import VerificationImagesForm from "../../components/VerificationImagesForm";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    "Inspector's Details",
    "Owner's Details",
    "Driver's Details",
    "Vehicle Details and Documentation",
    "Safety and Technical",
    "Verification Images"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Inspector's Details";
    case 1:
      return "Owner's Details";
    case 2:
      return "Driver's Details";
    case 3:
      return "Vehicle Details and Documentation";
    case 4:
      return "Safety and Technical";
    case 5:
      return "Verification Images";
    default:
      return "Unknown step";
  }
}

export default function VehicleRoute(props) {
  const { match, history } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  function isStepOptional(step) {
    return step === 4;
  }

  function isStepFailed(step) {
    return step === 1;
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(skipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  function renderForm(activeStep) {
    return (
      <Formik
        className={classes.form}
        initialValues={StoreInitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {props => {
          switch (activeStep) {
            case 0:
              return <InspectorForm {...props} />;
            case 1:
              return <OwnersForm {...props} />;
            case 2:
              return <DriversForm {...props} />;
            case 3:
              return <VehicleDetailsForm {...props} />;
            case 4:
              return <SafetyTechnicalForm {...props} />;
            case 5:
              return <VerificationImagesForm {...props} />;
            default:
              return <InspectorForm />;
          }
        }}
      </Formik>
    );
  }

  return (
    <Container maxwidth="lg" className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption" color="error">
          //       Alert message
          //     </Typography>
          //   );
          // }
          // if (isStepFailed(index)) {
          //   labelProps.error = true;
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Container component="main" maxWidth="lg">
        {renderForm(activeStep)}
      </Container>
      {/* {renderForm(activeStep)} */}
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {/* <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography> */}

            <div style={{ marginTop: 30 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {/* {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )} */}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
