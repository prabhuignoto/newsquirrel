import Styled from 'react-emotion';
import { AppMode } from './../../enums/appMode';
import { IAppMode } from './../../models/view/IAppState';

const Wrapper = Styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 90vh;
`;

const FilterWrapper = Styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const AppModeWrapper = Styled('div')`
  /* margin-right: 2.5rem; */
`;

const Toolbar = Styled('div')<{appMode: IAppMode}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  // background-color: ${p => p.appMode.value === AppMode.DARK ? '#000' : '#fff'};
  transition: background-color 0.5s;
  margin-top: 1rem;
`
const SortbyWrapper = Styled('div')`
  /* margin-right: 2.5rem; */
`;


const DarkModeBackdrop = Styled('div')<{show: number}>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: -1;
  top: 0px;
  opacity: ${p => p.show === 1 ? 1 : 0};
  visibility: ${p => p.show === 1 ? 'visible' : 'hidden'};
  transition: all 0.5s;
`
export {
  Wrapper,
  FilterWrapper,
  Toolbar,
  SortbyWrapper,
  AppModeWrapper,
  DarkModeBackdrop,
}