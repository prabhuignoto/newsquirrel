import * as React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.footer`
  display: flex;
  width: 100%;
  height: 10rem;
  align-items: center;
  justify-content: space-evenly;
  color: #2B2D42;
  /* padding-bottom: 3rem; */
  flex-wrap: wrap;
  font-size: 0.9rem;
`;

const Social = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
`;

const Img = Styled.img`
  margin: 0 0.5rem;
`;

const PoweredBy = Styled.div`
  display: flex;
`;

const Copyright = Styled.div`
  display: flex;
`;

const DesignedBy = Styled.div`
  display: flex;
`

const Footer = () => {
  return (
    <Wrapper data-testid="rt-footer">
      <Social>
        <a href="https://twitter.com/prabhumurthy2" target="new">
          <Img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg" />
        </a>
        <a href="https://github.com/prabhuignoto" target="new">
          <Img height="20" width="20" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
        </a>
      </Social>
      <Copyright>
        <span>2018 © Prabhu Murthy</span>
      </Copyright>
      <DesignedBy>Designed &amp; developed with 🖤 by me</DesignedBy>
      <PoweredBy>
        <a href="https://newsapi.org">Powered by News API</a>
      </PoweredBy>
    </Wrapper>
  )
}

export default Footer;
