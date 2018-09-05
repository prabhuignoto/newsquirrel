import * as _ from "lodash";
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
  searchResultsCount: 0,
  searchTerm: '',
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
  totalResults: 0,
};

export default function newsReducer(
  state = defaultState,
  action: any
) {
  switch (action.type) {
    case Constants.SWITCH_COUNTRY:
      return Object.assign({}, state, {
        selectedCountry: action.country
      });
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
    case Constants.SEARCH_NEWS_API:
      return Object.assign({}, state, {
        searchTerm: action.term,
      })
    default:
      return state;
      break;
  }
}
