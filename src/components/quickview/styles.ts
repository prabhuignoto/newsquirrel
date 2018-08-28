import Styled from 'styled-components'

export const Wrapper = Styled.section`
  width: 100%;
  height: 100vh;
  border: 10px solid rgba(43, 45, 66, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: rgba(43, 45, 66, 0.85);
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Header = Styled.header`
  width: 95%;
  display: flex;
  margin-bottom: 1rem;
`;

export const CloseButton = Styled.button`
  border: none;
  background: none;
  margin-left: auto;
  font-size: 1.25rem;
  color: #EF233C;
`;

export const HeaderText = Styled.span`
  display: block;
  font-size: 2rem;
  margin-right: auto;
  color: #EDF2F4;
`

export const IFrameContent = Styled.div`
  width: 100%;
  height: 95%;
  /* position: absolute; */
  /* bottom: 2rem; */
  position: relative;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background: #fff;
  border-radius: 8px;
`
