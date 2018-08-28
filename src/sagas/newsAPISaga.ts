import axios, { AxiosError, AxiosResponse } from "axios";
import * as DateFNS from "date-fns";
import { delay } from "redux-saga";
import { put, takeEvery, takeLatest } from "redux-saga/effects";
import * as uniqid from "uniqid";

import { Constants } from "../actions/constants";
import {
  ICheckUrlComplete,
  IGetNewsAction,
  ILoadingNews,
  ILoadingNewsFailed,
  INavToNextPage,
  INavToPrevPage,
  INewsLoaded,
  ISearchNewsAPI,
  ISwitchCountry
} from "../actions/types";
import { INewsResponse } from "../models/data/INewsResponse";
import { IArticleCard } from "../models/view/IArticleCard";

export function* watchCanLoadUrlInFrame() {
  yield takeEvery(
    [Constants.CAN_LOAD_URL_IN_IFRAME],
    function* canLoadUrlInFrame(action: any) {
      const { url, id } = action;
      try {
        const response: AxiosResponse = yield axios.post(
          `${process.env.REACT_APP_NEWSQUIRREL_SERVER}/canBeLoaded`,
          {
            id,
            url
          }
        );
        const data: any = response.data;
        yield put<ICheckUrlComplete>({
          canEmbedInFrame: data.canLoad,
          id,
          type: Constants.CAN_LOAD_URL_IN_IFRAME_RESULTS
        });
      } catch (e) {
        throw new Error(e);
      }
    }
  );
}

export function* watchGetHeadlines() {
  const takePattern = [Constants.GET_NEWS, Constants.SWITCH_COUNTRY];
  yield takeEvery(takePattern, function* getNews(
    action: IGetNewsAction & INavToNextPage & INavToPrevPage & ISwitchCountry
  ) {
    const { category, page, country } = action;
    const endPoint = process.env.REACT_APP_NEWS_API_HEADLINES;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const url = `${endPoint}?country=${
      country ? country.toLowerCase() : "us"
    }&category=${category}&page=${page}&apiKey=${apiKey}`;

    yield put<ILoadingNews>({
      message: "News Loading",
      type: Constants.LOADING_HEADLINES
    });

    try {
      const response: AxiosResponse = yield axios.get(url, {
        timeout: 5000
      });
      const newsResponse: INewsResponse = response.data;

      if (response.status === 200) {
        const articleCards: IArticleCard[] = newsResponse.articles.map<
          IArticleCard
        >(article => ({
          articleUrl: article.url,
          author: article.author,
          description: article.description,
          id: uniqid("article-"),
          publishedAt: article.publishedAt,
          source: article.source.name,
          thumbnailUrl: article.urlToImage.replace(/http:/,'https:'),
          title: article.title
        }));

        yield put<INewsLoaded>({
          articleCards,
          totalResults: newsResponse.totalResults,
          type: Constants.HEADLINES_LOADED
        });
      } else {
        throw new Error("Failed to Load the News");
      }
    } catch (e) {
      yield put<ILoadingNewsFailed>({
        response: (e as AxiosError).response,
        type: Constants.LOADING_NEWS_FAILED
      });
    }
  });
}

export function* watchSearchNews() {
  const pattern = [
    Constants.SEARCH_NEWS_API,
    Constants.SORT_BY,
    Constants.NAV_TO_NEXT_PAGE,
    Constants.NAV_TO_PREV_PAGE
  ];

  yield takeLatest(pattern, function* searchNewsAPI(action: ISearchNewsAPI) {
    yield delay(300);
    const { searchTerm, sortField, page, dateFilter } = action;
    let sortBy = null;
    if (sortField) {
      sortBy = sortField.value;
    } else {
      sortBy = "relevancy";
    }

    yield put<ILoadingNews>({
      message: "News Loading",
      type: Constants.LOADING_NEWS
    });
    const url = process.env.REACT_APP_NEWS_API_SEARCH;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const params = [
      ["q", searchTerm],
      ["page", page],
      ["pageSize", 30],
      ["language", "en"],
      ["sortBy", sortBy],
      ["apiKey", apiKey],
      ["from", DateFNS.format(dateFilter.from, "YYYY-MM-DD")],
      ["to", DateFNS.format(dateFilter.to, "YYYY-MM-DD")]
    ];

    const queryParams = params.map(z => z.join("=")).join("&");

    try {
      const response: AxiosResponse = yield axios.get(`${url}?${queryParams}`, {
        timeout: 5000
      });
      const newsResponse: INewsResponse = response.data;

      if (response.status === 200) {
        const articleCards: IArticleCard[] = newsResponse.articles.map<
          IArticleCard
        >(article => ({
          articleUrl: article.url,
          author: article.author,
          description: article.description,
          id: uniqid("article-"),
          publishedAt: article.publishedAt,
          source: article.source.name,
          thumbnailUrl: article.urlToImage,
          title: article.title
        }));

        yield put<INewsLoaded>({
          articleCards,
          totalResults: newsResponse.totalResults,
          type: Constants.NEWS_LOADED
        });
      } else {
        throw new Error("Error fetching news");
      }
    } catch (e) {
      yield put<ILoadingNewsFailed>({
        response: (e as AxiosError).response,
        type: Constants.LOADING_NEWS_FAILED
      });
    }
  });
}
