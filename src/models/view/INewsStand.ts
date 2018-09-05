import NewsStandSize from '../../enums/newsStandSize';
import { IAppMode } from './IAppState';
// import { IArticleCardView } from './IArticleCard';

export interface INewsStand{
  // articleCards: IArticleCardView[];
  standSize?: NewsStandSize;
  detailedPaneOpen?: boolean;
  detailedArticleUrl?: string;
  appMode: IAppMode;
  country: string;
  category: string;
  quickViewUrl: string;
  openQuickView: boolean;
  quickViewOpen: boolean;
  quickViewPosition: {
    x: number,
    y: number
  }
}