import Styled from 'styled-components';
import CloseSVG from './cross-out.svg';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  height: 40px;
  min-width: 350px;
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
  background: #EDF2F4;
  &:focus {
    border-bottom: 2px solid #D90429;
  }
`;

const Button = Styled.button`
  border: none;
  width: 23px;
  height: 23px;
  position: absolute;
  right: 10px;
  top: 20%;
  /* transform: translateY(-50%); */
  background: url(${CloseSVG});
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