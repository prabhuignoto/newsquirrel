import Styled from "styled-components";

export const Wrapper = Styled.section`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow-y:auto;
`;

export const Logo = Styled.img`
  align-self: flex-start;
  margin: 0.25rem 0;
  padding: 0.25rem;
  object-fit: contain;
  height: 3rem;
`;

export const Thumbnail = Styled.img`
`;

export const Title = Styled.div`
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.25rem;
  font-weight: 700;
  width: 100%;
  font-family: 'Oswald', sans-serif;
  text-align: left;
`;

export const Description = Styled.div`
  font-size: 1rem;
  text-align: left;
  margin-top: 1rem;
  padding: 0.25rem;
  width: 100%;
`;


export const CloseBtn = Styled.button`
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 1.75rem;
  height: 1.75rem;
  background: none;
  z-index: 2;
`;

export const Date = Styled.time`
  color: red;
  align-self: flex-start;
  font-IChangeNewsStandSize: 0.75rem;
  padding-left: 0.5rem;
`;

export const SpinnerWrapper = Styled.div`
  width: 50%;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
`
