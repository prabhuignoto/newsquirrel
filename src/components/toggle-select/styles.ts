import Styled from "@emotion/styled";
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
    return $red;
  }
}

const Wrapper = Styled('div')<{size: Size}>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.25rem 0.25rem;
  background: #EDF2F4;
  border-radius: 3px;
  box-shadow: 0px 3px 1px rgba(0,0,0,0.2);
  width: 100%;
  height: 3rem;
`;

const Label = Styled('div')<{size?: Size, label: string}>`
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  margin: ${p => !!p.label ? '0.5em 0.5em' : ''};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.size === Size.SMALL ? '#D8DCDE' : ''};
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
`;

const List = Styled('ul')`
  list-style: none;
  margin: 0 auto;
  width: 96%;
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ListItem = Styled('li')<{selected: boolean,size: Size, theme?: string}>`
  width: 100%;
  border-radius: 3px;
  background-color: ${p => p.selected ? '#A1ABBC' : ''};
  color: ${p => p.selected ? '#fff' : '#A1ABBC'};
  font-weight: ${p => p.selected ? '500' : ''};
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  height: 90%;
  user-select: none;
  outline: none;
  flex: 1;
  &:hover {
    // color: #2B2D42;
  }
  &::after {
    content: ${p => p.selected ? '': null}
    display: block;
    position: absolute;
    width: 1rem;
    height: 1rem;
    background: '#EF233C';
  }
`;

const IconWrapper = Styled('div')`
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