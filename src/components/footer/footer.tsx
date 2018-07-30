import * as React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.footer`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`

const Footer = () => {
  return (
    <Wrapper>
      <a href="https://newsapi.org">Powered by News API</a>
    </Wrapper>
  )
}

export default Footer;
