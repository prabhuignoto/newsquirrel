import { connect } from 'react-redux';
import { compose, lifecycle, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';
import { Dispatch } from 'redux';

import { getNews, updateNewsCategory } from '../actions/creators';
import Filters from '../components/filters/filters';
import { IDateFilter } from '../models/data/IDateFilter';
import { IFilter } from '../models/data/IFilter';
import { IAppState } from '../models/view/IAppState';

const mapStateToProps = ({news, options}: IAppState) => ({
  country: news.selectedCountry,
  dateFilter: options.dateFilter,
  items: options.defaultCategories.map(x => {
    let selected = false;
    if(x === options.filter.categories[0]) {
      selected = true;
    }
    return {
      name: x,
      selected,
      value: x,
    }
  }),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getNewsFeed: (value: string, page: number, country: string, dateFilter: IDateFilter) => dispatch(getNews(value, page, country, dateFilter)),
  updateCategory: (filter: IFilter) => dispatch(updateNewsCategory(filter))
});

interface IStateHandlers<T> extends StateHandlerMap<T> {
  selectFilter: StateHandler<T>
}

interface ILocalState {
  selectedFilter: IFilter;
  items: Array<{name: string, value: string}>
}

interface IProps {
  updateCategory: (filter: IFilter) => void;
  getNewsFeed: (value: string, page: number, country: string, dateFilter: IDateFilter) => void;
  country: string;
  dateFilter: IDateFilter
}

const initialState = ({
  items,
  selectedFilter = {
    name: 'category',
    value: 'science'
  }
}:{selectedFilter: IFilter , items: Array<{name: string, value: string}>}) => ({
  items,
  selectedFilter,
});

const stateHandlers = {
  selectFilter: ({items}: ILocalState, {updateCategory, getNewsFeed, country, dateFilter}: IProps) => (filter: IFilter) => {
    updateCategory(filter);
    getNewsFeed(filter.value, 1, country, dateFilter);
    return {
      items: items.map(x => {
        let selected = false;
        if(x.name === filter.name) {
          selected = true;
        }
        return Object.assign({}, x , {
          selected
        })
      })
    }
    return {
      selectedFilter: filter
    };
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle<IProps,  ILocalState>({
    componentDidMount() {
      // this.props.getNewsFeed('general',1, this.props.country);
    }
  }),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
)(Filters)