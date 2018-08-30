import Posed from 'react-pose';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 150px; */
  height: 40px;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  border: 1px solid transparent;
  &:hover {
    border: 1px dotted #EDF2F4;
  }
  padding: 0.5rem;
`;

const LabelWrapper = Styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Label = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 500;
  margin-right: auto;
  text-transform: capitalize;
  color: #D8DCDE;
`;

const SelectedItem = Styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  width: 30%;
  margin-right: 0.5rem;
`;

const Icon = Styled.i`
  display: block;
  width: 20%
`;

const PosedList = Posed.ul({
  close: {
    opacity: 0,
    scale: 0,
  },
  open: {
    opacity: 1,
    scale: 1,
  }
})

const List = Styled(PosedList)`
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 42px;
  border: 1px dotted rgba(0,0,0,0.5);
  background: #8D99AE;
  z-index: 100;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.5);
`;

const ListItem = Styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: #8D99AE;
  height: 35px;
  padding: 0.5rem;
  text-align: left;
  color: #EDF2F4;
  &:hover {
    background-color: #EDF2F4;
    color: #2B2D42;
  }
  font-size: 0.9rem;
`;

const Img = Styled.img`
  margin-right: 0.5em;
`;


export {
  Wrapper,
  Label,
  Icon,
  List,
  ListItem,
  LabelWrapper,
  SelectedItem,
  Img
}


