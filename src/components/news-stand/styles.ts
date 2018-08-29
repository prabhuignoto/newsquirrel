import Styled from "styled-components";
import { AppMode } from './../../enums/appMode';
import { IAppMode } from './../../models/view/IAppState';

import Size from "../../enums/newsStandSize";

const NewsStandWrapper = Styled.div<{appMode: IAppMode}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0  0 2rem 0;
  width: 100%;
  transition: background-color 0.5s;
  position: relative;
`;

const SortByWrapper = Styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ArticlesWrapper = Styled.div<{ show: number }>`
  display: ${p => (p.show === 1 ? "flex" : "none")};
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
`;

const LoadingText = Styled.span`
  font-size: 3rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
  color: #A1ABBC;
`;

const ArticleCardWrapper = Styled.div<{ size?: Size }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: ${p => (p.size !== Size.IMAGE_FREE ? "1rem" : "0.75rem")};
  padding: 0.25rem;
  flex-basis: ${p => {
    if (p.size === Size.COZY) {
      return "270px";
    } else if (p.size === Size.COMPACT) {
      return "220px";
    } else {
      return "300px";
    }
  }};
  min-height: ${p => (p.size === Size.COZY ? "300px" : "250px")};
  border-radius: 3px;
  position: relative;
  flex-grow: 1;
  //flex-basis: ${p => (p.size === Size.COZY ? "270px" : "220px")};
  transition: all 2s linear;
`;

const CardTitle = Styled.div<{ size?: Size; appMode?: IAppMode}>`
  display: flex;
  font-size: ${p => {
    switch (p.size) {
      case Size.COZY:
        return "1.25rem";
      case Size.COMPACT:
        return "1rem";
      case Size.IMAGE_FREE:
        return "1.5rem";
      default:
        return "1rem";
    }
  }};
  text-align: left;
  padding: 0.1rem;
  margin-top: 0.1rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  text-decoration: dotted;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  width: 100%;
`;

const TitleAnchor = Styled.a<{appMode?: IAppMode}>`
  color: ${p => p.appMode!.value === AppMode.DARK ? '#747E8F' : '#2B2D42'};
`;

const StubImage = Styled.img`
  display: none;
`;

const ImageWrapper = Styled.figure<{ size?: Size }>`
  padding: 0.1rem;
  width: 100%;
  height: ${p => (p.size === Size.COMPACT ? "120px" : "160px")};
  position: relative;
  display: block;
`;

const CardImage = Styled.img<{ thumbnailUrl?: string; size?: Size; appMode?: IAppMode }>`
  height: ${p => (p.size === Size.COMPACT ? "120px" : "100%")};
  display: block;
  padding: 0.1rem;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  width: 100%;
  object-fit: cover;
  object-position: 50% 0%;
  filter: ${p => p.appMode!.value === AppMode.DARK ? 'grayscale(90%)' : ''};
  &:hover {
    filter: brightness(1.1) sepia(0.15) grayscale(30%);
  }
  border-radius: ${p => p.size === Size.COMPACT ? '4px' :''};
`;

const CardDescription = Styled.div<{ size?: Size }>`
  display: ${p =>
    p.size === Size.COZY || p.size === Size.IMAGE_FREE ? "flex" : "none"};
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  /* max-height: 150px; */
  text-overflow: ellipsis;
  padding: 0.1rem;
  margin-top: 0.5rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  font-size: 1rem;
  color: #747E8F;
`;

const Publisher = Styled.div<{ size?: Size; appMode?: IAppMode}>`
  display: ${p => (p.size === Size.COZY ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 100%;
  /* margin-bottom: 0.5rem; */
  font-size: 0.75rem;
  height: 45px;
  background-color: ${p => p.appMode!.value === AppMode.DARK ? '#000' : '#EDF2F4'};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const PublishedBy = Styled.div`
  margin-left: auto;
  margin-right: 5px;
  color: #D90429;
  padding: 2px 10px;
  font-size: 0.9rem;
`;

const PublishDate = Styled.time`
  margin-right: auto;
  margin-left: 10px;
  color: #515364;
  font-size: 0.8rem;
  font-weight: 500;
`;

const CheckPreview = Styled.a`
  margin-right: 1rem;
  padding-left: 1.5rem;
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
`;

const PreviewArticle = Styled.a`
  font-size: 0.9rem;
  margin-right: 0.5rem;
  padding: 0.1rem;
  color: '#EF233C';
  font-family: "Oswald", sans-serif;
`;

const Controls = Styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.25rem 0;
`;

const ErrorMessage = Styled.span`
  display: block;
  margin-right: 0.5rem;
  padding: 0.1rem;
  color: red;
  font-size: 0.8rem;
`;

const QuickviewWrapper = Styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 1.5rem;
  width: 600px;
  height: 600px;
  z-index: 10;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.25);
`;


export {
  NewsStandWrapper,
  ArticleCardWrapper,
  CardTitle,
  CardImage,
  CardDescription,
  PublishDate,
  PublishedBy,
  Publisher,
  TitleAnchor,
  ArticlesWrapper,
  SortByWrapper,
  ImageWrapper,
  StubImage,
  LoadingText,
  CheckPreview,
  PreviewArticle,
  Controls,
  ErrorMessage,
  QuickviewWrapper
};
