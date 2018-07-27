import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  height: 40px;
  min-width: 350px;
  border-radius: 2px;
`;

const Input = Styled.input`
  font-size: 1.25rem;
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #D90429;
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
  background: #EDF2F4;
  &:focus {
    border-bottom: 2px solid #D90429;
  }
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