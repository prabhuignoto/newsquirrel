import { Constants } from '../actions/constants';
import { ISearchNewsAPI } from '../actions/types';
import NewsStandSize from '../enums/newsStandSize';
import { IFilter } from '../models/data/IFilter';
import { IOptionsState } from '../models/view/IAppState';
import DefaultCategories from '../settings/categories';
import DefaultCountries from '../settings/countries';

const defaultState: IOptionsState = {
  activePage: 1,
  currentlySortingBy: {
    name: 'Relevance',
    value: 'relevancy'
  },
  defaultCategories: DefaultCategories,
  defaultCountries: DefaultCountries,
  filter: {
    categories: ['general']
  },
  newsStandSize: NewsStandSize.COZY,
  pageSize: 20,
  searchingFor: '',
  sortBy: [
    {
      name: 'Relevance',
      value: 'relevancy',
    },
    {
      name: 'Popularity',
      value: 'popularity'
    },
    {
      name: 'Newest First',
      value: 'publishedAt',
    },
  ],
};

export default function optionsReducer(state:IOptionsState = defaultState, action: any & ISearchNewsAPI) {
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
    case Constants.SORT_BY:
      return Object.assign({}, state, {
        currentlySortingBy: action.field
      })
    case Constants.SEARCH_NEWS_API:
      return Object.assign({}, state, {
        searchingFor: action.searchTerm
      });
    case Constants.CHANGE_NEWSSTAND_SIZE:
      return Object.assign({}, state, {
        newsStandSize: action.size
      })
    default:
      return state;
      break;
  }
}