import Styled from "styled-components";
import Size from "../../enums/toggleSelectSize";

const $blue = '#8D99AE';
const $red = '#EF233C';

function getColor(theme: string) {
  if(theme === 'blue') {
    return $blue;
  } else {
    return $red;
  }
}

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = Styled.div`
  font-size: 1em;
  white-space: nowrap;
  margin: 0.2em 0.5em;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2B2D42;
`;

const List = Styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const ListItem = Styled.li<{selected: boolean,size: Size, theme?: string}>`
  width: 100%;
  margin: 0.2em 0.5em;
  border: 1px solid ${p => getColor(p.theme)};
  border-radius: 4px;
  background: ${p => p.selected ? getColor(p.theme) : ''};
  color: ${p => p.selected ? '#fff' : getColor(p.theme)};
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  height: ${p => p.size === Size.SMALL ? '32px' : '40px'};
  font-size: ${p => p.size === Size.SMALL ? '1rem' : '1.2rem'};
`;

export {
  Wrapper,
  Label,
  List,
  ListItem
}