import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  height: 40px;
  min-width: 400px;
  border-radius: 2px;
  position: relative;
`;

const Input = Styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #D90429;
  border-top: none;
  border-right: none;
  border-left: none;
  outline: none;
  background: #2B2D42;
  color: #EDF2F4;
  &:focus {
    border-bottom: 2px solid #D90429;
  }
`;

const Button = Styled.button`
  border: none;
  width: 22px;
  height: 22px;
  position: absolute;
  right: 10px;
  top: 20%;
  /* transform: translateY(-50%); */
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;
`;

export {
  Wrapper,
  Button,
  Input
};