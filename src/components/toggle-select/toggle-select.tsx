import * as React from 'react';

import { IToggleItem, IToggleSelect } from '../../models/view/IToggleSelect';
import { Label, List, ListItem, Wrapper } from './styles';

const handler = function _handler(fn: (name: string, value: string) => void, name: string, value: string) {
  return function oHandler(ev: React.MouseEvent<HTMLLIElement>) {
    fn(name, value);
  }
}

const ToggleItem: React.SFC<IToggleItem> = ({ name, value, onToggle, selected, size, theme }) => (
  <ListItem 
    onClick={handler(onToggle, name, value)}
    selected={selected}
    size={size}
    theme={theme}
    key={name}
  >{name}</ListItem>
);

const ToggleSelect: React.SFC<IToggleSelect> = ({ label, items, onToggle, size, theme }) => {
  return (
    <Wrapper size={size}>
      <Label size={size} label={label}>{label}</Label>
      <List>
        {
          items.map<React.ReactElement<IToggleItem>>(
            x => <ToggleItem {...x} key={x.name} onToggle={onToggle} size={size} theme={theme} />
          )
        }
      </List>
    </Wrapper>
  )
}

export default ToggleSelect
