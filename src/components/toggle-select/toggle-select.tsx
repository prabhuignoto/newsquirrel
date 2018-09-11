import * as React from "react";

import { State } from "react-powerplug";
import { IToggleItem, IToggleSelect } from "../../models/view/IToggleSelect";
import { Label, List, ListItem, Wrapper } from "./styles";

const handler = function _handler(
  fn: (name: string, value: number) => void,
  name: string,
  value: number
) {
  return function oHandler(ev: React.MouseEvent<HTMLLIElement>) {
    fn(name, value);
  };
};

const ToggleItem: React.SFC<IToggleItem> = ({
  name,
  value,
  onClick,
  selected,
  size,
  theme
}) => (
  <ListItem
    onClick={handler(onClick, name, value)}
    selected={selected}
    size={size}
    theme={theme}
    key={name}
    tabIndex={0}
  >
    {name}
  </ListItem>
);

const ToggleSelect: React.SFC<IToggleSelect> = ({
  label,
  items,
  size,
  theme,
  type,
  update
}) => {
  return (
    <Wrapper size={size} data-testid="rt-toggle-select">
      <Label size={size} label={label}>
        {label}
      </Label>
      <State initial={{ uitems: items }}>
        {({ state, setState }) => {
          const onClick: (name: string, value: number) => void = (
            name,
            value
          ) => {
            update({
              variables: {
                name,
                value
              }
            });
            setState({
              uitems: state.uitems.map(x => {
                let selected = false;
                if (x.name === name) {
                  selected = true;
                }
                return Object.assign({}, x, {
                  selected
                });
              })
            });
          };
          return (
            <List>
              {state.uitems.map<React.ReactElement<IToggleItem>>(x => (
                <ToggleItem
                  {...x}
                  key={x.name}
                  onClick={onClick}
                  size={size}
                  theme={theme}
                />
              ))}
            </List>
          );
        }}
      </State>
    </Wrapper>
  );
};

export default ToggleSelect;
