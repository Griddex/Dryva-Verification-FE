import React from "react";
import Grid from "@material-ui/core/Grid";
import ImageUploader from "react-images-upload";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

const VerificationImagesForm = props => {
  console.log("Logged output: props", props);
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    images: { flexFlow: "row" || "wrap" },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  }));

  let {
    values: { images }
  } = props;

  const handleImagesSelected = imgs => {
    console.log("Logged output: image", imgs);
    images = imgs;
  };

  const classes = useStyles();
  return (
    // <Grid container spacing={3} className={classes.root}>
    //   <Grid item xs={12}>
    //     <Grid
    //       container
    //       justify="flex-start"
    //       spacing={2}
    //       //className={classes.images}
    //     >
    //       {images &&
    //         images.map(image => (
    //           <Grid item>
    //             <ButtonBase className={classes.image}>
    //               <img className={classes.img} src={image.name} />
    //             </ButtonBase>
    //           </Grid>
    //         ))}
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid container justify="center">
    <ImageUploader
      withIcon={true}
      buttonText="Choose images"
      onChange={handleImagesSelected}
      imgExtension={[".jpg", ".gif", ".png", "gif"]}
      maxFileSize={5242880}
      withPreview={true}
    />
    // </Grid>
    // </Grid>
    // </Grid> */
  );
};

export default VerificationImagesForm;
