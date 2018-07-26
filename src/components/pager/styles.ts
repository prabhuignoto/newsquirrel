import Styled from 'styled-components';

const Button = Styled.button`
  background: none;
  border-radius: 3px;
  margin: 0.5rem;
  font-size: 1rem;
  height: 40px;
  margin: 0.5rem;
  /* padding: 0.1rem 1rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #8D99AE;
  color: #EDF2F4;
  border: none;
  width: 80px;
  cursor: pointer;
`;

const Previous = Styled(Button)`
`;
const Next = Styled(Button)`
`;

const Wrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 2rem;
  padding: 0.25rem;
`;

const PageLabel = Styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  line-height: 30px;
  border-radius: 3px;
  margin: 0.5rem;
  color: #8D99AE;
  font-size: 1.5rem;
`;

export {
  Previous,
  Next,
  Wrapper,
  PageLabel
}