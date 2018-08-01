import Styled from 'styled-components';

const Button = Styled.button<{disable: boolean}>`
  background: none;
  border-radius: 3px;
  margin: 0.5rem;
  font-size: 1.25rem;
  height: 35px;
  margin: 0.5rem;
  padding: 0.1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => !p.disabled ? '#8D99AE' : '#ccc'};
  border: none;
  min-width: 60px;
  cursor: pointer;
  font-family: 'Oswald', sans-serif;
  outline: none;
  &:hover {
    color: ${p => p.disabled ? '#ccc' : '#2B2D42'};
  }
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
  height: 30px;
  margin: 1.5rem;
  padding: 0.25rem;
`;

const PageLabel = Styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  line-height: 30px;
  border-radius: 3px;
  margin: 0.25rem;
  color: #EF233C;
  font-size: 1.25rem;
`;

export {
  Previous,
  Next,
  Wrapper,
  PageLabel
}