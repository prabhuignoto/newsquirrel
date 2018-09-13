import Styled2 from "react-emotion";
import posed from "react-pose";
import Size from "../../enums/newsStandSize";
import NewsStandSize from "../../enums/newsStandSize";
import { AppMode } from "./../../enums/appMode";
import { IAppMode } from "./../../models/view/IAppState";

export const NewsStandWrapper = Styled2("div")<{ appMode: IAppMode }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0  0 2rem 0;
  width: 100%;
  transition: background-color 0.5s;
  position: relative;
  min-height: 60vh;
`;

export const SortByWrapper = Styled2("div")`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ArticlesWrapper = Styled2("div")`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

export const LoadingText = Styled2("span")`
  font-size: 2.5rem;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  transform: translateY(-50%);
  color: #A1ABBC;
`;

export const ArticleCardWrapper = Styled2("div")<{ size?: Size }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0.75rem;
  padding: 0.25rem;
  // flex-basis: ${p => (p.size === Size.COZY ? "300px" : "220px")};
  min-height: "300px";
  border-radius: 3px;
  position: relative;
  // flex-grow: 1;
  position: relative;
  flex: 1;
  min-width: ${p => (p.size === Size.COZY ? "300px" : "220px")}
`;

export const CardTitle = Styled2("div")`
  display: flex;
  font-size: 1.25rem;
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

export const TitleAnchor = Styled2("a")<{ appMode?: IAppMode }>`
  color: ${p => (p.appMode!.value === AppMode.DARK ? "#EDF2F4" : "#2B2D42")};
`;

export const StubImage = Styled2("img")`
  display: none;
`;

export const ImageWrapper = Styled2("figure")<{ size?: Size }>`
width: 100%;
position: relative;
display: block;
height: 10rem;
`;

export const CardImage = Styled2("img")<{
  thumbnailUrl?: string;
  size?: Size;
  appMode?: IAppMode;
}>`
  display: block;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
  filter: ${p =>
    p.appMode && p.appMode!.value === AppMode.DARK ? "grayscale(90%)" : ""};
  &:hover {
    filter: brightness(1.1) sepia(0.15) grayscale(30%);
  }
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`;

export const CardDescription = Styled2("div")<{ size?: Size }>`
  display: 'flex';
  visibility: ${p => (p.size !== Size.COMPACT ? "visible" : "hidden")};
  height: ${p => p.size === Size.COMPACT ? 0 : ''};
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  width: 100%;
  text-overflow: ellipsis;
  padding: 0.1rem;
  margin-top: 0.5rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  font-size: 1rem;
  color: #747E8F;
`;

export const Publisher = Styled2("div")<{ size?: Size; appMode: IAppMode }>`
  display: flex;
  visibility: ${p => (p.size !== NewsStandSize.IMAGE_FREE ? "visible" : "hidden")};
  height: ${p => (p.size == NewsStandSize.IMAGE_FREE ? "0" : "")};
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 0.75rem;
  height: 40px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: ${p =>
    p.appMode.value === AppMode.LIGHT
      ? "1px solid rgba(161, 171, 188, 0.35)"
      : ""};
  box-shadow: ${p =>
    p.appMode.value === AppMode.LIGHT
      ? "inset 0 0 15px 5px rgba(161, 171, 188, 0.2)"
      : ""};
  border-bottom: none;
`;

export const PublishedBy = Styled2("div")`
  margin-left: auto;
  margin-right: 5px;
  color: #D90429;
  padding: 2px 10px;
  font-size: 0.9rem;
`;

export const PublishDate = Styled2("time")`
  margin-right: auto;
  margin-left: 10px;
  color: #515364;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const CheckPreview = Styled2("a")`
  margin-right: 0.75rem;
  /* padding-left: 1.5rem; */
  width: 1.65rem;
  height: 1.65rem;
  position: relative;
`;

export const PreviewArticle = Styled2("a")`
  font-size: 0.9rem;
  margin-right: 0.5rem;
  padding: 0.1rem;
  color: '#EF233C';
  font-family: "Oswald", sans-serif;
`;

export const Controls = Styled2("div")`
  display:flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.25rem 0;
`;

export const ErrorMessage = Styled2("span")`
  display: block;
  margin-right: 0.5rem;
  padding: 0.1rem;
  color: red;
  font-size: 0.8rem;
`;

export const PosedWrapper = posed.div({
  close: {
    opacity: 0
  },
  open: {
    opacity: 1
  }
});

export const LoadMoreWrapper = Styled2("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadMore = Styled2("a")`
  padding: 1rem;
  font-size: 2rem;
  font-weight: 500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  color:#2b2d42;
  &:hover {
    text-decoration: underline;
  };
  width: 10rem;
  height: 4rem;
`;

export const SpinnerWrapper = Styled2("div")`
  width: 6rem;
  height: 6rem;
  position: relative;
  margin-top: 4rem;
  padding: 1rem;
`;

export const QuickviewWrapper = Styled2("div")`
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 1.5rem 1rem 2rem 1rem;
  width: 90%;
  min-height: 700px;
  z-index: 100;
  top: 2%;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.2);
  margin: 0 auto;
`;

export const PosedQuickViewOverlay = posed.div({
  close: {
    background: "rgba(0,0,0,0.1)"
  },
  open: {
    background: "rgba(0,0,0,0.15)"
  }
});

export const QuickViewOverlay = Styled2("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
