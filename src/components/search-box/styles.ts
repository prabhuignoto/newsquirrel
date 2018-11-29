import Styled from '@emotion/styled';
import Pose from 'react-pose';

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
  border: none;
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
  right: 4.5rem;
  top: 50%;
  transform: translateY(-50%) !important;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background: none;
  outline: none;
`;

export const GoButton = Styled('button')`
  background: #EDF2F4;
  border-radius: 3px;
  box-shadow: 0px 3px 1px rgba(0,0,0,0.2);
  width: 2.8rem;
  height: 2.8rem;
  padding: 1rem;
  border: none;
  margin-left: 0.5rem;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative
`;

/* export const GoButton = Pose(Button)({
  init: { scale: 1 },
  press: { scale: 0.8 },
  pressable: true,
}) */