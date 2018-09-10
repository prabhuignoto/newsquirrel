import NewsStandSize from '../../enums/newsStandSize';
import { IAppMode } from './IAppState';
// import { IArticleCardView } from './IArticleCard';

export interface INewsStand{
  // articleCards: IArticleCardView[];
  newstandSize?: NewsStandSize;
  detailedPaneOpen?: boolean;
  detailedArticleUrl?: string;
  appMode: IAppMode;
  quickViewUrl: string;
  openQuickView: boolean;
  quickViewOpen: boolean;
  loading: boolean;
  error: any;
  data: any;
  category: string;
  country: string;
}