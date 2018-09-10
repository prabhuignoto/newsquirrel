import * as React from "react";
import { State } from "react-powerplug";
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

const handler = function _handler(fn: (name: string, code: string) => void, name: string, code: string) {
  return function oHandler(ev: React.MouseEvent) {
    if (fn) {
      fn(name, code.toUpperCase());
    }
  };
};

const DropdownItem: React.SFC<IDropdownItem> = ({
  name,
  onSelect,
  code,
  icon,
}) => <ListItem onClick={handler(onSelect, name, code)}>{name}</ListItem>;

const Dropdown: React.SFC<IDropdown> = ({ items, label, update, selectedItem }) => (
  <State initial={{ uiItems: items, show: false, selectedItem }}>
    {({ state, setState }) => {
      const onClick = () => setState({ show: !state.show });
      const onSelect = (name: string, code: string) => {
        setState({
          selectedItem: code,
          show: false
        });
        update({
          variables: {
            code
          }
        });
      };
      return (
        <Wrapper onClick={onClick} data-testid="rt-dropdown-wrapper">
          <LabelWrapper>
            <Label data-testid="rt-dropdown-label">{label}</Label>
            <Icon />
          </LabelWrapper>
          <SelectedItem>
            <img
              src={`https://www.countryflags.io/${state.selectedItem}/flat/64.png`}
            />
          </SelectedItem>
          {state.show ? (
            <List pose="open" initialPose="close">
              {items.map<React.ReactElement<IDropdownItem>>(x => (
                <DropdownItem {...x} key={x.name} onSelect={onSelect} />
              ))}
            </List>
          ) : null}
        </Wrapper>
      );
    }}
  </State>
);

export default Dropdown;
