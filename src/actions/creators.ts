import NewsStandSize from '../enums/newsStandSize';
import ReadingMode from '../enums/readingMode';
import { IFilter } from '../models/data/IFilter';
import { ISortBy } from '../models/view/IAppState';
import { IDateFilter } from './../models/data/IDateFilter';
import { Constants } from './constants';
import {
  IChangeNewsStandSize,
  IClearSearchResults,
  IGetNewsAction,
  INavToNextPage,
  INavToPrevPage,
  ISearchNewsAPI,
  IShowArticle,
  ISortByAction,
  ISwitchCountry,
  ISwitchNewsReadingMode,
  IUpdateNewsCategory,
} from './types';

export function updateNewsCategory(filter: IFilter): IUpdateNewsCategory {
  return {
    filter,
    type: Constants.UPDATE_CATEGORY,
  }
}

export function getNews(category: string, page: number, country: string, dateFilter?: IDateFilter): IGetNewsAction {
  return {
    category,
    country,
    dateFilter,
    page,
    type: Constants.GET_NEWS
  }
}

export function navToNextPage(page: number, category: string, searchTerm: string, sortBy: ISortBy): INavToNextPage {
  return {
    category,
    page,
    searchTerm,
    sortField: sortBy,
    type: Constants.NAV_TO_NEXT_PAGE,
  }
}

export function navToPrevPage(page: number, category: string, searchTerm: string, sortBy:ISortBy): INavToPrevPage {
  return {
    category,
    page,
    searchTerm,
    sortField: sortBy,
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

export function searchNewsAPI(searchTerm: string, sortField: { name: string, value: string }, page: number, dateFilter: IDateFilter): ISearchNewsAPI {
  return {
    dateFilter,
    page,
    searchTerm,
    sortField,
    type: Constants.SEARCH_NEWS_API,
  }
}

export function sortByField(sortField: { name: string, value: string }, searchTerm: string): ISortByAction {
  return {
    searchTerm,
    sortField,
    type: Constants.SORT_BY,
  };
}

export function switchNewsReadingMode(mode: ReadingMode): ISwitchNewsReadingMode {
  return {
    mode,
    type: Constants.SWITCH_NEWS_READING_MODE
  }
}

export function clearSearchResults():IClearSearchResults {
  return {
    type: Constants.CLEAR_SEARCH_RESULTS
  }
}

export function changeNewsStandSize(size: NewsStandSize): IChangeNewsStandSize {
  return {
    size,
    type: Constants.CHANGE_NEWSSTAND_SIZE,
  }
}

export function showArticle(url: string): IShowArticle {
  return {
    type: Constants.SHOW_ARTICLE,
    url,
  }
}

export function closeArticle(): {type: string} {
  return {
    type: Constants.CLOSE_ARTICLE,
  }
}

export function canLoadUrlInIframe(id: string, url: string) {
  return {
    id,
    type: Constants.CAN_LOAD_URL_IN_IFRAME,
    url,
  }
}