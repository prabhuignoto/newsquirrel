import ReadingMode from '../../enums/readingMode';
import { IArticleCard } from './IArticleCard';

export interface ICategoryState {
  name: string;
  value: string;
}

export interface INewsState {
  articleCards: IArticleCard[];
  totalResults: number;
  selectedCountry: string;
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
    categories: ICategoryState[]
  },
  sortBy: ISortBy[];
  currentlySortingBy: ISortBy;
  searchingFor: string;
  readingMode: ReadingMode;
}

export interface IAppState {
  categories: ICategoryState[];
  news: INewsState;
  options: IOptionsState
}