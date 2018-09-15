import * as React from "react";
import BlankImage from "./assets/blank.svg";
import { CardImage, ImageWrapper } from "./styles";

const Thumbnail = ({ data, loading, error }) => {
  return (
    <ImageWrapper>
      {!loading && !error && data ? (
        <CardImage src={`data:image/jpg;base64,${data}`} />
      ) : (
        <BlankImage />
      )}
    </ImageWrapper>
  );
};

export default Thumbnail;
