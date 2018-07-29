import Styled from 'styled-components';

import NewsStandSize from '../../enums/newsStandSize';

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
  justify-content: center;
`;

const ArticleCardWrapper = Styled.div<{size?: NewsStandSize}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0.25rem;
  padding: 0.75rem;
  flex: 1;
  min-width: ${p => p.size === NewsStandSize.COZY ? '300px' : '200px'};
  max-width: ${p => p.size === NewsStandSize.COZY ? '320px' : '230px'};
  min-height: ${p => p.size === NewsStandSize.COZY ? '300px' : '220px'};
  border-radius: 3px;
  &:hover {
  }
`;

const CardTitle = Styled.div<{size?: NewsStandSize}>`
  display: flex;
  font-size: ${(p) => {
    switch(p.size) {
      case NewsStandSize.COZY:
      case NewsStandSize.COMPACT:
        return '1.25rem';
      case NewsStandSize.IMAGE_FREE:
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

const CardImage = Styled.div<{thumbnailUrl?: string, size?: NewsStandSize}>`
  width: 100%;
  height: ${p => p.size === NewsStandSize.COMPACT ? '150px': '200px'};
  display: block;
  padding: 0.1rem;
  border-radius: 2px;
  background: url(${p => p.thumbnailUrl});
  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-size: ${p => p.thumbnailUrl !== null ? 'cover' : 'contain'};
`;

const CardDescription = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Publisher = Styled.div`
  display: flex;
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
  font-size: 0.9rem;
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
}