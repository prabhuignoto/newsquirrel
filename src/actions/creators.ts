import NewsStandSize from "../enums/newsStandSize";
import { IFilter } from "../models/data/IFilter";
import { IAppMode } from "./../models/view/IAppState";
import { Constants } from "./constants";
import {
  IChangeNewsStandSize,
  IClearSearchResults,
  IShowArticle,
  ISortByAction,
  ISwitchCountry,
  IUpdateNewsCategory
} from "./types";

export function updateNewsCategory(filter: IFilter): IUpdateNewsCategory {
  return {
    filter,
    type: Constants.UPDATE_CATEGORY
  };
}


export function switchCountry(
  country: string,
  category: string,
): ISwitchCountry {
  return {
    category,
    country,
    type: Constants.SWITCH_COUNTRY
  };
}
export function sortByField(
  sortField: { name: string; value: string },
  searchTerm: string
): ISortByAction {
  return {
    searchTerm,
    sortField,
    type: Constants.SORT_BY
  };
}

export function clearSearchResults(): IClearSearchResults {
  return {
    type: Constants.CLEAR_SEARCH_RESULTS
  };
}

export function changeNewsStandSize(size: NewsStandSize): IChangeNewsStandSize {
  return {
    size,
    type: Constants.CHANGE_NEWSSTAND_SIZE
  };
}

export function showArticle(url: string): IShowArticle {
  return {
    type: Constants.SHOW_ARTICLE,
    url
  };
}

export function closeArticle(): { type: string } {
  return {
    type: Constants.CLOSE_ARTICLE
  };
}

export function sortArticlesByTime(dir: string) {
  return {
    dir,
    type: Constants.SORT_ARTICLES_BY_TIME
  };
}

export function updateAppMode(mode: IAppMode) {
  return {
    mode,
    type: Constants.UPDATE_APP_MODE
  };
}

export function getIFramelyData(url: string) {
  return {
    type: Constants.SEND_IFRAMELY_REQUEST,
    url,
  }
}

export function closeQuickView() {
  return {
    type: Constants.CLOSE_QUICKVIEW
  }
}

export function getPocketRequestToken() {
  return {
    type: Constants.GET_POCKET_REQUEST_TOKEN
  }
}