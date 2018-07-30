import Styled, { keyframes } from 'styled-components';
import LoaderSize from '../../enums/loaderSize';

const Wrapper = Styled.div<{ size: LoaderSize }>`
  width: 100%;
  background: white;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  height: ${p => p.size === LoaderSize.SMALL ? '1px' : '2px'};
`;

const CircleLoader = keyframes`
  0% {
    left: 0%;
    width: 0%;
  }
  50% {
    width: 50%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
`;

const LoaderIndicator = Styled.div<{ start?: boolean, stop?: boolean }>`
  left: 0%;
  width: 0%;
  height: 100%;
  position: absolute;
  animation: ${p => p.start === true ? CircleLoader : 0};
  animation-duration: 1.5s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(217,4,41,1) 54%, rgba(255,255,255,1) 100%);
  z-index: 0;
`;

export {
  Wrapper,
  LoaderIndicator
}