import Styled from 'styled-components';

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
`;

export const Link = Styled.a`
  padding: 0.25rem;
  margin: 0.25rem;
  height: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #D8DCDE;
  &:hover {
    outline-offset: 3px;
    outline: 1px dotted #D8DCDE;
    color: #D8DCDE;
  }
`;

export const IconWrapper = Styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  margin-right: 0.5rem;
`;