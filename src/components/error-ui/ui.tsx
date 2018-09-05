import * as React from 'react';
import ErrorSVG from './error.svg';
import { IconWrapper, Message, Wrapper} from './styles';

const UI: React.SFC<{message: string}> = ({message}) => {
  return (
    <Wrapper>
      <IconWrapper>
        <ErrorSVG />
      </IconWrapper>
      <Message>{message}</Message>
    </Wrapper>
  )
}

export default UI
