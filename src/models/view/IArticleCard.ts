import NewsStandSize from "../../enums/newsStandSize";
import { IAppMode } from './IAppState';

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
  newSize?: NewsStandSize;
  imageLoaded?: boolean;
  onImageLoaded?: () => void;
  showArticle?: (url: string) => void;
  checkArticle?: (url: string) => void;
  canEmbedInFrame?: boolean;
  appMode?: IAppMode;
  quickViewUrl?: string;
  openQuickView: boolean;
}