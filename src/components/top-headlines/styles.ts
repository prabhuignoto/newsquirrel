import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: 90vh;
`;

const FilterWrapper = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Toolbar = Styled.div`
  /* background: linear-gradient(to right, rgba(43,45,66,1) 0%, rgba(62,64,83,1) 54%, rgba(43,45,66,1) 100%); */
  /* padding: 0.5rem 0.5rem 0 0; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0.75rem;
`
const SortbyWrapper = Styled.div`
  margin-right: 2.5rem;
`;
export {
  Wrapper,
  FilterWrapper,
  Toolbar,
  SortbyWrapper,
}