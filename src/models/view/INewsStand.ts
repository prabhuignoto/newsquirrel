import NewsStandSize from '../../enums/newsStandSize';
import { IArticleCard } from './IArticleCard';

export interface INewsStand{
  articleCards: IArticleCard[];
  standSize?: NewsStandSize;
}