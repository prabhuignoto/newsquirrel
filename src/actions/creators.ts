import NewsStandSize from '../enums/newsStandSize';
import ReadingMode from '../enums/readingMode';
import { IFilter } from '../models/data/IFilter';
import { Constants } from './constants';
import {
  IChangeNewsStandSize,
  IClearSearchResults,
  IGetNewsAction,
  INavToNextPage,
  INavToPrevPage,
  ISearchNewsAPI,
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

export function searchNewsAPI(searchTerm: string, sortField: { name: string, value: string }): ISearchNewsAPI {
  return {
    searchTerm,
    sortField,
    type: Constants.SEARCH_NEWS_API,
  }
}

export function sortByField(field: { name: string, value: string }, searchTerm: string): ISortByAction {
  return {
    field,
    searchTerm,
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