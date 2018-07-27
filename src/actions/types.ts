import ReadingMode from '../enums/readingMode';
import { IFilter } from '../models/data/IFilter';
import { IArticleCard } from '../models/view/IArticleCard';

export interface IBase {
  type: string;
}

export interface IGetNewsAction extends IBase {
  category: string;
  country: string;
  page: number;
}

export interface IUpdateNewsCategory extends IBase {
  filter: IFilter;
}

export interface ILoadingNews extends IBase {
  message: string;
}

export interface ILoadingNewsFailed extends IBase {
  message: string;
}

export interface INewsLoaded extends IBase {
  articleCards: IArticleCard[];
  totalResults: number;
}

export interface INavToNextPage extends IBase {
  page: number;
  category: string;
  country: string;
}

export interface INavToPrevPage extends IBase {
  page: number;
  category: string;
  country: string;
}

export interface ISwitchCountry extends IBase {
  category: string;
  country: string;
  page: number;
}

export interface ISearchNewsAPI extends IBase {
  searchTerm: string;
  sortField: {
    name: string;
    value: string
  }
}

export interface ISortByAction extends IBase {
  field: {
    name: string;
    value: string;
  },
  searchTerm: string;
}

export interface ISwitchNewsReadingMode extends IBase {
  mode: ReadingMode;
}

