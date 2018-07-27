import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  border: 1px solid #8D99AE;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
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
  width: 80%;
  height: 100%;
  white-space: nowrap;
  font-size: 1rem;
  margin-right: auto;
  text-transform: capitalize;
  color: #2B2D42;
`;

const SelectedItem = Styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  width: 20%;
  color: #EF233C;
`;

const Icon = Styled.i`
  display: block;
  width: 20%
`;

const List = Styled.ul`
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
`;

export {
  Wrapper,
  Label,
  Icon,
  List,
  ListItem,
  LabelWrapper,
  SelectedItem
}


