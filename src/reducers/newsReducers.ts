import * as _ from 'lodash';
import { INewsLoaded, ISwitchCountry, ISwitchNewsReadingMode } from '../actions/types';
import ReadingMode from '../enums/readingMode';
import { INewsState } from '../models/view/IAppState';
import { Constants } from './../actions/constants';
import { ILoadingNewsFailed } from './../actions/types';

const defaultState: INewsState = {
  activeSortByTime: {
    name: "Newest First",
    value: "newest"
  },
  failureResponse: null,
  headlinesCount: 0,
  isAppBusy: false,
  newsArticles: [],
  quickViewData: {},
  quickViewEnabled: false,
  quickViewLoading: false,
  quickViewUrl: '',
  readingMode: ReadingMode.TOP_HEADLINES,
  searchResultsCount: 0,
  selectedCountry: 'us',
  sortByTime: [
    {
      name: "Newest First",
      value: "newest"
    },
    {
      name: "Oldest First",
      value: "oldest"
    }
  ],
  topHeadlines: [],
  totalResults: 0,
}

export default function newsReducer(state = defaultState, action: ISwitchNewsReadingMode & INewsLoaded & ISwitchCountry & ILoadingNewsFailed & any) {
  switch (action.type) {
    case Constants.HEADLINES_LOADED:
      return Object.assign({}, state, {
        headlinesCount: action.totalResults,
        isAppBusy: false,
        topHeadlines: _.orderBy(
          action.articleCards,
          ['publishedAt'],
          [state.activeSortByTime.value === 'newest' ? 'desc' : 'asc'])
      });
    case Constants.NEWS_LOADED:
      return Object.assign({}, state, {
        failureResponse: null,
        isAppBusy: false,
        newsArticles: action.articleCards,
        searchResultsCount: action.totalResults,
      });
    case Constants.SWITCH_COUNTRY:
      return Object.assign({}, state, {
        selectedCountry: action.country
      });
    case Constants.CLEAR_SEARCH_RESULTS:
      return Object.assign({}, state, {
        failureResponse: null,
        newsArticles: [],
        searchResultsCount: 0,
      });
    case Constants.LOADING_NEWS:
    case Constants.LOADING_HEADLINES:
      return Object.assign({}, state, {
        isAppBusy: true
      });
    case Constants.LOADING_NEWS_FAILED:
      return Object.assign({}, state, {
        failureResponse: action.response,
        isAppBusy: false,
      });
    case Constants.CAN_LOAD_URL_IN_IFRAME_RESULTS:
      const updatedHeadlines = state.topHeadlines.map(item => {
        if(item.id === action.id) {
          return Object.assign({}, item, {
            canEmbedInFrame: action.canEmbedInFrame
          });
        }
        return item;
      })
      return Object.assign({}, state, {
        topHeadlines: updatedHeadlines,
      });
    case Constants.SWITCH_NEWS_READING_MODE:
      const uAction = action as ISwitchNewsReadingMode;
      if (action.mode === ReadingMode.TOP_HEADLINES) {
        return Object.assign({}, state, {
          failureResponse: null,
          newsArticles: [],
          readingMode: uAction.mode,
          searchResultsCount: 0
        })
      } else {
        return Object.assign({}, state, {
          failureResponse: null,
          readingMode: uAction.mode,
          topHeadlines: []
        });
      }
    case Constants.SORT_ARTICLES_BY_TIME:
      return Object.assign({}, state, {
        activeSortByTime: {
          name: action.dir,
          value: action.dir,
        },
        topHeadlines: _.orderBy(
          state.topHeadlines,
          ['publishedAt'],
          [action.dir === 'newest' ? 'desc' : 'asc'])
      })
    case Constants.SEND_IFRAMELY_REQUEST:
      return Object.assign({}, state, {
        quickViewData: {},
        quickViewEnabled: true,
        quickViewLoading: true,
        quickViewUrl: action.url,
      })
    case Constants.IFRAMELY_REQUEST_RECEIVED:
      return Object.assign({}, state, {
        quickViewData: action.data,
        quickViewLoading: false
      })
    case Constants.CLOSE_QUICKVIEW:
      return Object.assign({}, state, {
        quickViewEnabled: false,
      })
    default:
      return state;
      break;
  }
} 