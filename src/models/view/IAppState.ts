import { AxiosResponse } from 'axios';
import { AppMode } from './../../enums/appMode';

import NewsStandSize from '../../enums/newsStandSize';
import ReadingMode from '../../enums/readingMode';
import { IDateFilter } from './../data/IDateFilter';
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
  failureResponse: AxiosResponse | null;
  sortByTime: ISortBy[];
  activeSortByTime: ISortBy;
}

export interface ICountry {
  name: string;
  value: string;
}

export interface ISortBy {
  name: string;
  value: string;
}

export interface IAppMode{
  name: string;
  value: AppMode;
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
  dateFilter: IDateFilter;
  detailedPaneOpen: boolean;
  detailedArticleUrl: string;
  defaultAppMode: IAppMode;
  availableAppModes: IAppMode[];
}

export interface IAppState {
  categories: string[];
  news: INewsState;
  options: IOptionsState
}