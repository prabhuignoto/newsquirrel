import Styled, { keyframes } from 'styled-components';
import Size from '../../enums/loaderSize';

const Wrapper = Styled.div<{ size: Size }>`
  width: 100%;
  background: white;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  height: ${p => p.size === Size.SMALL ? '1px' : '4px'};
  background: #2B2D42;
`;

const CircleLoader = keyframes`
  0% {
    left: 0%;
    width: 0%;
  }
  50% {
    width: 50%;
    left: 50%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
`;

const LoaderIndicator = Styled.div<{ start: boolean, stop: boolean, size?: Size }>`
  left: 0%;
  width: 0%;
  height: 100%;
  position: absolute;
  animation: ${p => p.start === true ? CircleLoader : 0};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  background: ${p => p.size === Size.LARGE ? 
    'linear-gradient(to right, rgba(43,45,66,1) 0%, rgba(217,4,41,1) 54%, rgba(43,45,66,1) 100%)':
    'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(217,4,41,1) 54%, rgba(255,255,255,1) 100%)'};
  z-index: 0;
`;

export {
  Wrapper,
  LoaderIndicator
}