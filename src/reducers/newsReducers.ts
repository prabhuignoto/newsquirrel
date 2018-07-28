import { Constants } from '../actions/constants';
import { INewsLoaded, ISwitchCountry, ISwitchNewsReadingMode } from '../actions/types';
import ReadingMode from '../enums/readingMode';
import { INewsState } from '../models/view/IAppState';

const defaultState: INewsState = {
  headlinesCount: 0,
  isAppBusy: false,
  newsArticles: [],
  readingMode: ReadingMode.TOP_HEADLINES,
  searchResultsCount: 0,
  selectedCountry: 'us',
  topHeadlines: [],
  totalResults: 0,
}

export default function newsReducer(state = defaultState, action: ISwitchNewsReadingMode & INewsLoaded & ISwitchCountry) {
  switch (action.type) {
    case Constants.HEADLINES_LOADED:
      return Object.assign({}, state, {
        headlinesCount: action.totalResults,
        isAppBusy: false,
        topHeadlines: action.articleCards
      });
    case Constants.NEWS_LOADED:
      return Object.assign({}, state, {
        isAppBusy: false,
        newsArticles: action.articleCards,
        searchResultsCount: action.totalResults
      });
    case Constants.SWITCH_COUNTRY:
      return Object.assign({}, state, {
        selectedCountry: action.country
      });
    case Constants.CLEAR_SEARCH_RESULTS:
      return Object.assign({}, state, {
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
        isAppBusy: false
      });
    case Constants.SWITCH_NEWS_READING_MODE:
      const uAction = action as ISwitchNewsReadingMode;
      if (action.mode === ReadingMode.TOP_HEADLINES) {
        return Object.assign({}, state, {
          newsArticles: [],
          readingMode: uAction.mode,
        })
      } else {
        return Object.assign({}, state, {
          readingMode: uAction.mode,
          topHeadlines: []
        });
      }
    default:
      return state;
      break;
  }
} 