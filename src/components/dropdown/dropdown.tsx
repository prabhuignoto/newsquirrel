import * as React from "react";
import { IDropdown, IDropdownItem } from "../../models/view/IDropdown";
import {
  Icon,
  Label,
  LabelWrapper,
  List,
  ListItem,
  SelectedItem,
  Wrapper
} from "./styles";

const handler = function _handler(fn: (value: string) => void, value: string) {
  return function oHandler(ev: React.MouseEvent) {
    if(fn) {
      fn(value.toUpperCase());
    }
  };
};

const DropdownItem: React.SFC<IDropdownItem> = ({
  name,
  onSelect,
  value,
  icon
}) => <ListItem onClick={handler(onSelect, value)}>{name}</ListItem>;

const Dropdown: React.SFC<IDropdown> = ({
  items,
  selectedItem,
  onClick,
  show,
  label,
  onSelect
}) => {
  return (
    <Wrapper onClick={onClick} data-testid="rt-dropdown-wrapper">
      <LabelWrapper>
        <Label data-testid="rt-dropdown-label">{label}</Label>
        <Icon />
      </LabelWrapper>
      <SelectedItem>
        <img src={`https://www.countryflags.io/${selectedItem}/flat/64.png`} />
      </SelectedItem>
      {show ? (
        <List pose="open" initialPose="close">
          {items.map<React.ReactElement<IDropdownItem>>(x => (
            <DropdownItem {...x} key={x.name} onSelect={onSelect} />
          ))}
        </List>
      ) : null}
    </Wrapper>
  );
};

export default Dropdown;
