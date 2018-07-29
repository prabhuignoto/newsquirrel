import * as React from 'react';

import { IDropdown, IDropdownItem } from '../../models/view/IDropdown';
import { Img, Label, LabelWrapper, List, ListItem, SelectedItem, Wrapper } from './styles';

const handler = function _handler(fn: (value: string) => void, value: string) {
  return function oHandler(ev: React.MouseEvent) {
    fn(value.toUpperCase());
  }
}

const DropdownItem: React.SFC<IDropdownItem> = ({ name, onSelect, value, icon }) => (
  <ListItem onClick={handler(onSelect, value)}>
    {icon ? <Img src={icon} /> : null}
    {name}
  </ListItem>
)

const Dropdown: React.SFC<IDropdown> = ({ items, selectedItem, onClick, show, label, onSelect }) => {
  return (
    <Wrapper onClick={onClick}>
      <LabelWrapper>
        <Label>{label}</Label>
        <SelectedItem>{selectedItem}</SelectedItem>
        {/* <Icon /> */}
      </LabelWrapper>
      {show ? <List>
        {items.map<React.ReactElement<IDropdownItem>>(x => <DropdownItem {...x} key={x.name} onSelect={onSelect} />)}
      </List> : null}
    </Wrapper>
  )
}

export default Dropdown;

