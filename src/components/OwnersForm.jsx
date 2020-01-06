import React from "react";
import { Formik, Form } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Input from "./common/Input";

const useStyles = makeStyles(theme => ({
  "@global": { body: { backgroundColor: "#FFF" } },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(5)
  }
}));

function OwnersForm() {
  const classes = useStyles();
  return (
    <Formik
      className={classes.form}
      initialValues={{
        nameOfOwner: "",
        ownersHouseAddress: "",
        ownersMobileNo: "",
        ownersNextOfKinName: "",
        classes
      }}
      validationSchema={Yup.object().shape({
        nameOfOwner: Yup.string().required("Owner's name is required"),
        ownersHouseAddress: Yup.string().required(
          "Owner's house address is required"
        ),
        ownersMobileNo: Yup.string().required(
          "Owner's mobile number is required"
        ),
        ownersNextOfKinName: Yup.string().required(
          "Owner's next of kin name is required"
        )
      })}
    >
      {props => {
        const {
          values: {
            nameOfOwner,
            ownersHouseAddress,
            ownersMobileNo,
            ownersNextOfKinName,
            classes
          },
          errors,
          handleChange
        } = props;

        return (
          <Form style={{ width: "80%" }} className={classes.form}>
            {Input(
              "nameOfOwner",
              "Name of Owner",
              nameOfOwner,
              500,
              errors,
              handleChange
            )}
            {Input(
              "ownersHouseAddress",
              "Owner's house address",
              ownersHouseAddress,
              500,
              errors,
              handleChange
            )}
            {Input(
              "ownersMobileNo",
              "Owner's Mobile No.",
              ownersMobileNo,
              200,
              errors,
              handleChange
            )}

            {Input(
              "ownersNextOfKinName",
              "Owner's Next of Kin Name",
              ownersNextOfKinName,
              500,
              errors,
              handleChange
            )}
          </Form>
        );
      }}
    </Formik>
  );
}

export default OwnersForm;
