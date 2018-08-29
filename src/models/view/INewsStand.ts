import NewsStandSize from '../../enums/newsStandSize';
import { IAppMode } from './IAppState';
import { IArticleCard } from './IArticleCard';

export interface INewsStand{
  articleCards: IArticleCard[];
  standSize?: NewsStandSize;
  detailedPaneOpen?: boolean;
  detailedArticleUrl?: string;
  closeQuickView: () => void;
  onQuickViewLoadComplete: () => void;
  onError: () => void;
  quickViewLoading: boolean;
  appMode: IAppMode;
}