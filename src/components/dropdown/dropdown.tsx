import * as React from "react";
import { State } from "react-powerplug";
import { config, Spring } from "react-spring";
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

const handler = function _handler(
  fn: (name: string, code: string) => void,
  name: string,
  code: string
) {
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
  icon
}) => <ListItem onClick={handler(onSelect, name, code)}>{name}</ListItem>;

const Dropdown: React.SFC<IDropdown> = ({
  items,
  label,
  update,
  selectedItem
}) => (
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
          <SelectedItem>
            <img
              src={`https://www.countryflags.io/${
                state.selectedItem
              }/flat/64.png`}
            />
          </SelectedItem>
          <LabelWrapper>
            <Label data-testid="rt-dropdown-label">{label}</Label>
            <Icon />
          </LabelWrapper>
          {state.show ? (
            <Spring
              from={{ opacity: 0}}
              to={{ opacity: 1}}
              config={config.wobbly}
            >
              {styles => {
                return (
                  <List style={styles}>
                    {items.map<React.ReactElement<IDropdownItem>>(x => (
                      <DropdownItem {...x} key={x.name} onSelect={onSelect} />
                    ))}
                  </List>
                );
              }}
            </Spring>
          ) : null}
        </Wrapper>
      );
    }}
  </State>
);

export default Dropdown;
