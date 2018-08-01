import { AxiosResponse } from '../../node_modules/axios';
import NewsStandSize from '../enums/newsStandSize';
import ReadingMode from '../enums/readingMode';
import { IDateFilter } from '../models/data/IDateFilter';
import { IFilter } from '../models/data/IFilter';
import { ISortBy } from '../models/view/IAppState';
import { IArticleCard } from '../models/view/IArticleCard';

export interface IBase {
  type: string;
}

export interface IGetNewsAction extends IBase {
  category: string;
  country: string;
  page: number;
  dateFilter?: IDateFilter
}

export interface IUpdateNewsCategory extends IBase {
  filter: IFilter;
}

export interface ILoadingNews extends IBase {
  message: string;
}

export interface ILoadingNewsFailed extends IBase {
  response?: AxiosResponse;
}

export interface INewsLoaded extends IBase {
  articleCards: IArticleCard[];
  totalResults: number;
}

export interface INavToNextPage extends IBase {
  page: number;
  searchTerm: string;
  category: string;
  sortField: ISortBy;
}

export interface INavToPrevPage extends IBase {
  page: number;
  searchTerm: string;
  category: string;
  sortField: ISortBy;
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
  },
  page: number;
  dateFilter: IDateFilter
}

export interface ISortByAction extends IBase {
  sortField: {
    name: string;
    value: string;
  },
  searchTerm: string;
}

export interface ISwitchNewsReadingMode extends IBase {
  mode: ReadingMode;
}

export interface IClearSearchResults extends IBase {
  message?: string
}

export interface IChangeNewsStandSize extends IBase {
  message?: string;
  size: NewsStandSize
}

export interface IUpdateDateFilters extends IBase {
  searchTerm: string;
  sortField: {
    name: string;
    value: string
  },
  page: number;
  dateFilter: IDateFilter
}
