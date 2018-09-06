import * as React from "react";
import { Message, Wrapper } from "./styles";

const UI: React.SFC<{ message: string }> = ({ message }) => {
  return (
    <Wrapper>
      <Message>{message}</Message>
    </Wrapper>
  );
};

export default UI;
