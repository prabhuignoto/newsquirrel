import NewsStandSize from '../enums/newsStandSize';
import { IDateFilter } from '../models/data/IDateFilter';
import { IFilter } from '../models/data/IFilter';

export interface IBase {
  type: string;
}

export interface IUpdateNewsCategory extends IBase {
  filter: IFilter;
}
export interface ISwitchCountry extends IBase {
  category: string;
  country: string;
}


export interface ISortByAction extends IBase {
  sortField: {
    name: string;
    value: string;
  },
  searchTerm: string;
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

export interface IShowArticle extends IBase {
  url: string;
}


export interface IGetPocketReqToken extends IBase {
  message?: string;
}

export interface IPocketReqTokenRecvd extends IBase {
  token: string;
}