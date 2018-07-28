import axios, { AxiosResponse } from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import * as uniqid from 'uniqid';

import { Constants } from '../actions/constants';
import {
  IGetNewsAction,
  ILoadingNews,
  ILoadingNewsFailed,
  INavToNextPage,
  INavToPrevPage,
  INewsLoaded,
  ISearchNewsAPI,
  ISortByAction,
  ISwitchCountry,
} from '../actions/types';
import { INewsResponse } from '../models/data/INewsResponse';
import { IArticleCard } from '../models/view/IArticleCard';
              
export function* watchGetHeadlines() {
  const takePattern = [
    Constants.GET_NEWS,
    Constants.NAV_TO_NEXT_PAGE,
    Constants.NAV_TO_PREV_PAGE,
    Constants.SWITCH_COUNTRY
  ];
  yield takeEvery(takePattern, function* getNews(action: IGetNewsAction & INavToNextPage & INavToPrevPage & ISwitchCountry) {
    const { category, page, country } = action;
    const endPoint = process.env.REACT_APP_NEWS_API_HEADLINES;
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;

    const url = `${endPoint}?country=${country ? country.toLowerCase() : 'us'}&category=${category}&page=${page}&apiKey=${apiKey}`;

    yield put<ILoadingNews>({
      message: 'News Loading',
      type: Constants.LOADING_HEADLINES
    });

    try {
      const response: AxiosResponse = yield axios.get(url, {
        timeout: 5000
      });
      const newsResponse: INewsResponse = response.data;

      if (response.status === 200) {
        const articleCards: IArticleCard[] = newsResponse.articles.map<IArticleCard>(article => ({
          articleUrl: article.url,
          author: article.author,
          description: article.description,
          id: uniqid('article-'),
          publishedAt: article.publishedAt,
          source: article.source.name,
          thumbnailUrl: article.urlToImage,
          title: article.title,
        }));

        yield put<INewsLoaded>({
          articleCards,
          totalResults: newsResponse.totalResults,
          type: Constants.HEADLINES_LOADED
        });
      } else {
        throw new Error('Failed to Load the News');
      }

    } catch (exception) {
      yield put<ILoadingNewsFailed>({
        message: 'failed to load the news',
        type: Constants.LOADING_NEWS_FAILED
      });
    }
  });
}

export function* watchSearchNews() {
  const pattern = [Constants.SEARCH_NEWS_API, Constants.SORT_BY]
  yield takeEvery(pattern, function* searchNewsAPI(action: ISearchNewsAPI & ISortByAction) {
    const { searchTerm, field: sortField } = action;
    let sortBy = null;
    if(sortField) {
      sortBy = sortField.value;
    } else {
      sortBy = 'relevancy';
    }

    yield put<ILoadingNews>({
      message: 'News Loading',
      type: Constants.LOADING_NEWS
    });
    
    try {
      const url = process.env.REACT_APP_NEWS_API_SEARCH;
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;

      const response: AxiosResponse = yield axios.get(`${url}?q=${searchTerm}&lang=en&sortBy=${sortBy}&apiKey=${apiKey}`, {
        timeout: 5000
      });
      const newsResponse: INewsResponse = response.data;

      if(response.status === 200) {
        const articleCards: IArticleCard[] = newsResponse.articles.map<IArticleCard>(article => ({
          articleUrl: article.url,
          author: article.author,
          description: article.description,
          id: uniqid('article-'),
          publishedAt: article.publishedAt,
          source: article.source.name,
          thumbnailUrl: article.urlToImage,
          title: article.title,
        }));

        yield put<INewsLoaded>({
          articleCards,
          totalResults: newsResponse.totalResults,
          type: Constants.NEWS_LOADED
        });
      } else {
        throw new Error('Error fetching news');
      }
    } catch (exception) {
      yield put<ILoadingNewsFailed>({
        message: 'failed to load the news',
        type: Constants.LOADING_NEWS_FAILED
      });
    }
  })
}

