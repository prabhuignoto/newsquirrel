import NewsStandSize from '../../enums/newsStandSize';
import { IAppMode } from './IAppState';
// import { IArticleCardView } from './IArticleCard';

export interface INewsStand{
  // articleCards: IArticleCardView[];
  standSize?: NewsStandSize;
  detailedPaneOpen?: boolean;
  detailedArticleUrl?: string;
  // closeQuickView: () => void;
  // onQuickViewLoadComplete: () => void;
  // onError: () => void;
  // quickViewLoading: boolean;
  appMode: IAppMode;
  quickViewOpen?: boolean;
  country: string;
  category: string;
}