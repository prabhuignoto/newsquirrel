import { IFilter } from '../models/data/IFilter';
import { Constants } from './constants';
import {
  IGetNewsAction,
  INavToNextPage,
  INavToPrevPage,
  ISearchNewsAPI,
  ISwitchCountry,
  IUpdateNewsCategory,
} from './types';

export function updateNewsCategory(filter: IFilter): IUpdateNewsCategory {
  return {
    filter,
    type: Constants.UPDATE_CATEGORY,
  }
}

export function getNews(category: string, page: number, country: string): IGetNewsAction {
  return {
    category,
    country,
    page,
    type: Constants.GET_NEWS
  }
}

export function navToNextPage(page: number, category: string, country: string): INavToNextPage {
  return {
    category,
    country,
    page,
    type: Constants.NAV_TO_NEXT_PAGE,
  }
}

export function navToPrevPage(page: number, category: string, country: string): INavToPrevPage {
  return {
    category,
    country,
    page,
    type: Constants.NAV_TO_PREV_PAGE,
  }
}

export function switchCountry(country: string, category: string, page: number): ISwitchCountry {
  return {
    category,
    country,
    page,
    type: Constants.SWITCH_COUNTRY,
  }
}

export function searchNewsAPI(searchTerm: string): ISearchNewsAPI {
  return {
    searchTerm,
    type: Constants.SEARCH_NEWS_API,
  }
}