import Styled from "styled-components";
import Size from "../../enums/toggleSelectSize";

const $blue = '#A1ABBC';
const $red = '#EF233C';

function getColor(theme: string) {
  if(theme === 'blue') {
    return $blue;
  } else {
    return $red;
  }
}

function getForeColor(theme: string) {
  if(theme === 'blue') {
    return $red;
  } else {
    return '#fff';
  }
}

const Wrapper = Styled.div<{size: Size}>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  // margin: 0.2rem 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${p => p.size === Size.SMALL ? '3px': ''};
  background: #EDF2F4;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  box-shadow: 0px 3px 1px rgba(0,0,0,0.2);
`;

const Label = Styled.div<{size?: Size, label: string}>`
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  margin: ${p => !!p.label ? '0.5em 0.5em' : ''};
  // height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.size === Size.SMALL ? '#D8DCDE' : ''};
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
`;

const List = Styled.ul`
  list-style: none;
  margin: 0;
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  margin-left: 0.25rem;
`;

const ListItem = Styled.li<{selected: boolean,size: Size, theme?: string}>`
  width: 100%;
  margin: 0.2em 0em;
  border-radius: 3px;
  background: ${p => p.size === Size.SMALL && p.selected ? getColor(p.theme) : ''};
  color: ${p => p.selected ? getForeColor(p.theme) : '#A1ABBC'};
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  text-shadow: ${p => p.selected ? '0 0 1px rgba(0,0,0,0.25)' : ''};
  font-size: ${p => p.size === Size.SMALL ? '1rem' : '1.75rem'};
  font-family: 'Oswald', sans-serif;
  text-transform: ${p => p.size === Size.LARGE ? 'uppercase': ''};
  letter-spacing: ${p => p.size === Size.LARGE ? '1px': ''};
  height: 100%;
  user-select: none;
  &:hover {
    border: ${p => p.size === Size.SMALL ? '1px dotted A1ABBC' : ''};
    color: ${p => p.size === Size.SMALL && !p.selected ? '#EF233C' : ''};
  }
  outline: none;
`;

const IconWrapper = Styled.div`
  position: relative;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  margin-left: 0.2rem;
`

export {
  Wrapper,
  Label,
  List,
  ListItem,
  IconWrapper,
}