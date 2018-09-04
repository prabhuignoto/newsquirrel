import * as _ from "lodash";
import ReadingMode from "../enums/readingMode";
import { INewsState } from "../models/view/IAppState";
import { Constants } from "./../actions/constants";

const defaultState: INewsState = {
  activeSortByTime: {
    name: "Newest First",
    value: "newest"
  },
  failureResponse: null,
  headlinesCount: 0,
  isAppBusy: false,
  newsArticles: [],
  pocketConfig: {
    accessToken: "",
    requestToken: ""
  },
  quickViewData: {},
  quickViewEnabled: false,
  quickViewLoading: false,
  quickViewUrl: "",
  readingMode: ReadingMode.TOP_HEADLINES,
  searchResultsCount: 0,
  selectedCountry: "us",
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
  totalResults: 0
};

export default function newsReducer(
  state = defaultState,
  action: any
) {
  switch (action.type) {
    case Constants.HEADLINES_LOADED:
      return Object.assign({}, state, {
        headlinesCount: action.totalResults,
        isAppBusy: false,
        topHeadlines: _.orderBy(
          action.articleCards,
          ["publishedAt"],
          [state.activeSortByTime.value === "newest" ? "desc" : "asc"]
        )
      });
    case Constants.SWITCH_COUNTRY:
      return Object.assign({}, state, {
        selectedCountry: action.country
      });
    case Constants.CLEAR_SEARCH_RESULTS:
      return Object.assign({}, state, {
        failureResponse: null,
        newsArticles: [],
        searchResultsCount: 0
      });
    case Constants.CAN_LOAD_URL_IN_IFRAME_RESULTS:
      const updatedHeadlines = state.topHeadlines.map(item => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            canEmbedInFrame: action.canEmbedInFrame
          });
        }
        return item;
      });
      return Object.assign({}, state, {
        topHeadlines: updatedHeadlines
      });
    case Constants.SWITCH_NEWS_READING_MODE:
      const uAction = action as ISwitchNewsReadingMode;
      if (action.mode === ReadingMode.TOP_HEADLINES) {
        return Object.assign({}, state, {
          failureResponse: null,
          newsArticles: [],
          readingMode: uAction.mode,
          searchResultsCount: 0
        });
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
          value: action.dir
        },
        topHeadlines: _.orderBy(
          state.topHeadlines,
          ["publishedAt"],
          [action.dir === "newest" ? "desc" : "asc"]
        )
      });
    case Constants.SEND_IFRAMELY_REQUEST:
      return Object.assign({}, state, {
        quickViewData: {},
        quickViewEnabled: true,
        quickViewLoading: true,
        quickViewUrl: action.url
      });
    case Constants.CLOSE_QUICKVIEW:
      return Object.assign({}, state, {
        quickViewEnabled: false
      });
    case Constants.POCKET_REQUEST_TOKEN_RECVD:
      return Object.assign({}, state, {
        pocketConfig: Object.assign({}, state.pocketConfig, {
          requestToken: action.token
        })
      });
    default:
      return state;
      break;
  }
}
