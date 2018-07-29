import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
`;

const Tools = Styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.5rem;
  margin-left: 2rem;
`;

const ToolWrapper = Styled.div`
  margin: 0.25rem;
`

export {
  Wrapper,
  Tools,
  ToolWrapper
}