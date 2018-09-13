import * as React from "react";
import BlankImage from "./assets/blank.svg";
import { CardImage, ImageWrapper } from "./styles";


const Thumbnail = ({imgUrl}: {imgUrl: string}) => {
  return (
    <ImageWrapper>
      {!!imgUrl ? <CardImage src={imgUrl} /> : <BlankImage />}
    </ImageWrapper>
  );
};

export default Thumbnail;
