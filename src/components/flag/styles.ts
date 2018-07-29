import Styled from "styled-components";

const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const Icon = Styled.div<{url?: string}>`
  width: 100%;
  height: 100%;
  background: url(${p => p.url});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;

export {
  Wrapper,
  Icon
}