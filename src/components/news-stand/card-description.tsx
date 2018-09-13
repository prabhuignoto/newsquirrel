import * as React from "react";
import NewsStandSize from "../../enums/newsStandSize";
import {CardDescription} from './styles';

const Description = ({size, description}: {size: NewsStandSize, description: string}) => {
  return (
    <CardDescription size={size}>
      {description ? <span>{description}</span> : null}
    </CardDescription>
  );
};

export default Description;
