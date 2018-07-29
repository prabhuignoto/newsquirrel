import NewsStandSize from '../../enums/newsStandSize';
import ReadingMode from '../../enums/readingMode';
import { IArticleCard } from './IArticleCard';

export interface INewsState {
  topHeadlines: IArticleCard[];
  newsArticles: IArticleCard[];
  totalResults: number;
  selectedCountry: string;
  searchResultsCount: number;
  headlinesCount: number;
  isAppBusy: boolean;
  readingMode: ReadingMode;
}

export interface ICountry {
  name: string;
  value: string;
}

export interface ISortBy {
  name: string;
  value: string;
}

export interface IOptionsState {
  pageSize: number;
  activePage: number;
  defaultCountries: ICountry[];
  defaultCategories: string[];
  filter: {
    categories: string[]
  },
  sortBy: ISortBy[];
  currentlySortingBy: ISortBy;
  searchingFor: string;
  newsStandSize: NewsStandSize;
}

export interface IAppState {
  categories: string[];
  news: INewsState;
  options: IOptionsState
}