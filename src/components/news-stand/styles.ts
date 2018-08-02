import Styled from 'styled-components';

import Size from '../../enums/newsStandSize';

const NewsStandWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const SortByWrapper = Styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const ArticlesWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ArticleCardWrapper = Styled.div<{ size?: Size }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: ${p => p.size !== Size.IMAGE_FREE ? '0.5rem' : ''};
  padding: 0.5rem;
  // min-width: ${(p) => {
    if (p.size === Size.COZY) {
      return '300px';
    } else if (p.size === Size.COMPACT) {
      return '200px';
    } else {
      return '280px';
    }
  }};
  max-width: ${(p) => {
    if (p.size === Size.COZY) {
      return '250px';
    } else if (p.size === Size.COMPACT) {
      return '200px';
    } else {
      return '250px';
    }
  }};
  min-height: ${p => p.size === Size.COZY ? '300px' : '250px'};
  border-radius: 3px;
  position: relative;
  flex: 1;
  flex-basis: auto;
`;

const CardTitle = Styled.div<{ size?: Size }>`
  display: flex;
  font-size: ${(p) => {
    switch (p.size) {
      case Size.COZY:
        return '1.25rem';
      case Size.COMPACT:
        return '1rem';
      case Size.IMAGE_FREE:
        return '1.5rem';
      default:
        return '1rem';
    }
  }};
  text-align: left;
  padding: 0.1rem;
  margin-top: 0.5rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  text-decoration: dotted;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  width: 100%;
`;

const TitleAnchor = Styled.a`
  color: #2B2D42;
`;

const StubImage = Styled.img`
  display: none;
`;

const CardImage = Styled.div<{ thumbnailUrl?: string, size?: Size }>`
  width: 100%;
  height: ${p => p.size === Size.COMPACT ? '120px' : '160px'};
  display: block;
  padding: 0.1rem;
  border-radius: 2px;
  background: url(${p => p.thumbnailUrl});
  background-position: 0% 50%;
  background-repeat: no-repeat;
  background-size: ${p => p.thumbnailUrl !== null ? 'cover' : 'contain'};
  position: relative;
`;

const CardDescription = Styled.div<{ size?: Size }>`
  display: ${p => p.size === Size.COZY || p.size === Size.IMAGE_FREE ? 'flex' : 'none'};
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

const Publisher = Styled.div<{ size?: Size }>`
  display: ${p => p.size === Size.COZY ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  width: 100%;
  /* margin-bottom: 0.5rem; */
  font-size: 0.75rem;
  height: 45px;
  background: #EDF2F4;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const PublishedBy = Styled.div`
  margin-left: auto;
  margin-right: 5px;
  color: #D90429;
  /* border-radius: 2px; */
  padding: 2px 10px;
  font-size: 0.9rem;
  /* background: rgba(116, 126, 143, 0.1); */
`;

const PublishDate = Styled.div`
  margin-right: auto;
  margin-left: 10px;
  color: #515364;
  font-size: 0.7rem;
  font-weight: 500;
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
  StubImage
}