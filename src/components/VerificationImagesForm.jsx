import React from "react";
import Grid from "@material-ui/Grid";
import ImageUploader from "react-images-upload";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

const VerificationImagesForm = props => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 500
    },
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

  const {
    values: { images },
    handleChange
  } = props;

  const onDrop = image => {
    setImages(images.concat(image));
  };

  const classes = useStyles();
  return (
    <div>
      <Grid container>
        {images.map(image => (
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} src={image.url} />
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", "gif"]}
        maxFileSize={5242880}
      />
    </div>
  );
};

export default VerificationImagesForm;
