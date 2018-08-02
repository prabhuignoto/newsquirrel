import Styled from 'styled-components';
import ViewPort from '../../enums/viewPort';

const Wrapper = Styled.div<{hasResults: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* margin-top: 2rem; */
  width: 100%;
  // background: ${p => p.hasResults ? '#fff' : '#2B2D42'};
  min-height: 90vh;
`;

const Tools = Styled.div<{vwPort?: ViewPort}>`
  display: flex;
  flex-direction: 'row';
  align-self: flex-start;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  width: 100%;
  background: linear-gradient(to right, rgba(43,45,66,1) 0%, rgba(62,64,83,1) 54%, rgba(43,45,66,1) 100%);
  min-height: 50px;
  padding: 0.25rem 0.5rem;
`;

const SearchToolsWrapper2 = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Icon = Styled.div<{img: any}>`
  width: 25px;
  height: 25px;
  background: url(${p => p.img});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  margin-right: 0.25rem;
`;

const ToolWrapper = Styled.div<{vwPort?: ViewPort}>`
  margin: 0.25rem;
  display: flex;
  // flex-direction: ${p => p.vwPort === ViewPort.DESK ? 'row' : 'column'};
  flex-direction: row;
  align-items: center;
`;

export {
  Wrapper,
  Tools,
  ToolWrapper,
  SearchToolsWrapper2,
  Icon
}