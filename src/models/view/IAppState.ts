import { ICountry } from '../data/ICountry';
import { IArticleCard } from "./IArticleCard";

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

export interface IOptionsState {
  pageSize: number;
    activePage: number;
    defaultCountries: ICountry[];
    defaultCategories: string[];
    filter: {
      categories: ICategoryState[]
    }
}
export interface IAppState{
  categories: ICategoryState[];
  news: INewsState;
  options: IOptionsState
}