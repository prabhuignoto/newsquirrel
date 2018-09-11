import Styled from 'react-emotion';

export const Wrapper = Styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 3.85rem;
  padding: 0.5rem;
  position: relative;
`

export const Input = Styled('input')`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  border: 1px solid #cccccc;
  border-bottom: none;
  background: #EDF2F4;
  color: #2b2d42;
  font-size: 1.25rem;
  padding-left: 1rem;
  box-shadow: 0px 3px 1px rgba(0,0,0,0.2);
  outline: none;
  &:focus {
  }
`;

export const ClearButton = Styled('button')`
  border: none;
  padding: 1rem;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background: none;
  outline: none;
`