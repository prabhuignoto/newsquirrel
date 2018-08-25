import * as React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.footer`
  display: flex;
  width: 100%;
  height: 7rem;
  align-items: center;
  justify-content: center;
  color: #2B2D42;
`;

const Footer = () => {
  return (
    <Wrapper data-testid="rt-footer">
      <a href="https://newsapi.org">Powered by News API</a>
    </Wrapper>
  )
}

export default Footer;
