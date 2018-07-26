import { Constants } from '../actions/constants';
import { INewsLoaded, ISwitchCountry } from '../actions/types';
import { INewsState } from '../models/view/IAppState';

const defaultState: INewsState = {
  articleCards: [],
  selectedCountry: 'us',
  totalResults: 0,
}

export default function newsReducer(state= defaultState, action: INewsLoaded & ISwitchCountry) {
  switch (action.type) {
    case Constants.NEWS_LOADED:
        return Object.assign({}, state , {
          articleCards: action.articleCards,
          totalResults: action.totalResults
        })
    case Constants.SWITCH_COUNTRY:
        return Object.assign({}, state, {
          selectedCountry: action.country
        });
    default:
      return state;
      break;
  }
} 