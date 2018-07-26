import { Constants } from '../actions/constants';
import { IFilter } from '../models/data/IFilter';
import { IOptionsState } from '../models/view/IAppState';

const defaultState: IOptionsState = {
  activePage: 1,
  defaultCategories: [
    'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
  ],
  defaultCountries: [{
    name: 'India',
    value: 'in'
  },{
    name: 'United States',
    value: 'us'
  }, {
    name: 'United Kingdom',
    value: 'gb'
  },{
    name: 'France',
    value: 'fr'
  }
  , {
    name: 'Germany',
    value: 'de'
  }
  , {
    name: 'Canada',
    value: 'ca'
  }
  , {
    name: 'Australia',
    value: 'au'
  }
],
  filter: {
    categories: []
  },
  pageSize: 20
};

export default function optionsReducer(state = defaultState, action: any) {
  switch (action.type) {
    case Constants.UPDATE_CATEGORY:
      return Object.assign({}, state, {
        activePage: 1,
        filter: Object.assign({}, state.filter, {
          categories: [(action.filter as IFilter).value],
        })
      })
      break;
    case Constants.NAV_TO_NEXT_PAGE:
      return Object.assign({}, state, {
        activePage: (state.activePage + 1)
      });
      break;
    case Constants.NAV_TO_PREV_PAGE:
      return Object.assign({}, state, {
        activePage: (state.activePage - 1)
      });
      break;

    default:
      return state;
      break;
  }
}