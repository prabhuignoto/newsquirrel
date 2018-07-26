import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;

const Input = Styled.input`
  border: none;
  font-size: 1.5em;
  padding: 0.5rem;
  margin: 0.2rem;
`;

const Button = Styled.button`
  border: none;
  background: none;
  font-size: 0.9rem;
`;

export {
  Wrapper,
  Button,
  Input
};