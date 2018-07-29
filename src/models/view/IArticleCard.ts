import NewsStandSize from "../../enums/newsStandSize";

export interface IArticleCard {
  id: string;
  author: string;
  title: string;
  articleUrl: string;
  thumbnailUrl: string;
  description: string;
  publishedAt: string;
  source: string;
  size?: NewsStandSize;
}