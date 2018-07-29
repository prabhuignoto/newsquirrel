import Styled from "styled-components";
import Size from "../../enums/toggleSelectSize";

const $blue = '#818C9F';
const $red = '#EF233C';

function getColor(theme: string) {
  if(theme === 'blue') {
    return $blue;
  } else {
    return $red;
  }
}

const Wrapper = Styled.div<{size: Size}>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem 0.75rem;
  padding: 0.25rem 0.5rem;
  // box-shadow: ${p => p.size === Size.SMALL ? '0 0 2px 1px rgba(0,0,0,0.2)' : ''};
  border-radius: ${p => p.size === Size.SMALL ? '3px': ''};
`;

const Label = Styled.div`
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  margin: 0.2em 0.5em;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2B2D42;
  font-family: 'Roboto', sans-serif;
`;

const List = Styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 0.25rem;
`;

const ListItem = Styled.li<{selected: boolean,size: Size, theme?: string}>`
  width: 100%;
  margin: 0.2em 0em;
  // border: 1px solid ${p => p.size === Size.SMALL ? getColor(p.theme) : 'none'};
  border-radius: 3px;
  background: ${p => p.selected ? getColor(p.theme) : ''};
  color: ${p => p.selected ? '#fff' : getColor(p.theme)};
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  // height: ${p => p.size === Size.SMALL ? '28px' : '40px'};
  font-size: ${p => p.size === Size.SMALL ? '1rem' : '1.2rem'};
  font-family: 'Roboto', sans-serif;
  height: 100%;
`;

export {
  Wrapper,
  Label,
  List,
  ListItem
}