import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const VerificationImages = () => {
  const [images, setImages] = useState([]);

  const onDrop = image => {
    setImages(images.concat(image));
  };

  return (
    <ImageUploader
      withIcon={true}
      buttonText="Choose images"
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", "gif"]}
      maxFileSize={5242880}
    />
  );
};

export default VerificationImages;
