import Styled from "@emotion/styled";

export const Wrapper = Styled('section')`
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
`;

export const Site = Styled('span')`
  align-self: flex-start;
  padding: 0.25rem;
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

export const LogoWrapper = Styled('div')`
  align-self: flex-start;
  margin: 0.25rem 0;
  padding: 0.25rem;
  height: 5rem;
`;

export const Logo = Styled('img')`
  object-fit: contain;
  object-position: 0;
  height: 100%;
  width: 100%;
`;

export const ThumbnailWrapper = Styled('div')`
  width: 100%;
  height: 40rem;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  padding: 1rem;
`

export const Thumbnail = Styled('img')`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border: none;
  margin: 0 auto;
  object-fit: cover;
  object-position: 0;
`;

export const Title = Styled('div')`
  font-size: 1.5rem;
  margin: 0.5rem;
  padding: 0.25rem;
  font-weight: 500;
  width: 100%;
  font-family: 'Oswald', sans-serif;
  text-align: left;
`;

export const Description = Styled('div')`
  font-size: 1rem;
  text-align: left;
  margin-top: 1rem;
  padding: 0.25rem;
  width: 100%;
`;


export const CloseBtn = Styled('button')`
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 2rem;
  height: 2rem;
  background: none;
  z-index: 2;
`;

export const Date = Styled('time')`
  color: red;
  align-self: flex-start;
  font-IChangeNewsStandSize: 0.75rem;
  padding-left: 0.5rem;
`;

export const SpinnerWrapper = Styled('div')`
  width: 8rem;
  height: 8rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
`
