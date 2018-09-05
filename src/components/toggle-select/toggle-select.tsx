import * as React from 'react';

import { IToggleItem, IToggleSelect, ToggleType } from '../../models/view/IToggleSelect';
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
    tabIndex={0}
  >{name}</ListItem>
);

const ToggleSelect: React.SFC<IToggleSelect> = ({ label, items, onToggle, size, theme, type }) => {
  return (
    <Wrapper size={size} data-testid="rt-toggle-select">
      <Label size={size} label={label}>{label}</Label>
      {/* <IconWrapper>
        {type === ToggleType.APP_MODE ? <Moon /> : null}
        {type === ToggleType.RESIZER ? <Smile /> : null}
        {type === ToggleType.SORT_ARTICLES ? <Clock /> : null}
      </IconWrapper> */}
      <List>
        {
          items.map<React.ReactElement<IToggleItem>>(
            x => <ToggleItem {...x} key={x.name} onToggle={onToggle} size={size} theme={theme}/>
          )
        }
      </List>
    </Wrapper>
  )
}

export default ToggleSelect
