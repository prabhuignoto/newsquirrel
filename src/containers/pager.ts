import * as _ from 'lodash';
import { connect } from 'react-redux';
import { compose, lifecycle, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';
import { Dispatch } from 'redux';

import Pager from '../components/pager/pager';
import { IDateFilter } from '../models/data/IDateFilter';
import { IAppState } from '../models/view/IAppState';

const getTotalPages = _.memoize((count) => {
  return Math.ceil(count/20)
});

const mapStateToProps = ({options, news}: IAppState) => ({
  activePage: options.activePage,
  category: options.filter.categories[0],
  country: news.selectedCountry,
  dateFilter: options.dateFilter,
  searchTerm: options.searchingFor,
  sortBy: options.currentlySortingBy,
  totalPages: getTotalPages(news.searchResultsCount),
});

interface ISortBy {
  name: string;
  value: string;
}

interface IProps {
  searchNews: (page: number, searchTerm: string, sortBy: ISortBy, dateFilter: IDateFilter) => void;
  category:string;
  totalPages: number;
  searchTerm: string;
  sortBy: ISortBy;
  dateFilter: IDateFilter,
  activePage: number;
}

interface ILocalState {
  disableNext: boolean;
  disablePrevious: boolean;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onNext: StateHandler<T>;
  onPrevious : StateHandler<T>;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchNews: (page: number, searchTerm: string, sortBy: ISortBy, dateFilter: IDateFilter) => dispatch(searchNewsAPI(searchTerm,sortBy,page,dateFilter)),
})

const initialState = ({ disableNext= false, disablePrevious= true }: ILocalState) => ({
  disableNext,
  disablePrevious
});

const stateHandlers = {
  onNext: ({disableNext}: ILocalState, {searchNews, category, totalPages, searchTerm, sortBy, dateFilter, activePage}: IProps) => () => {
    const [uActivePage] = [activePage + 1];
    if(uActivePage <= totalPages) {
      searchNews(uActivePage,searchTerm,sortBy,dateFilter);
      return {
        activePage: uActivePage,
        disableNext: uActivePage === totalPages ? true: false,
        disablePrevious: false
      }
    } else {
      return {};
    }
  },
  onPrevious: ({disablePrevious}: ILocalState, {searchNews, category, totalPages, searchTerm, sortBy, dateFilter, activePage}: IProps) => () => {
    if(activePage > 0) {
      const [uActivePage] = [activePage - 1];
      if(uActivePage <= totalPages && uActivePage > 0) {
        searchNews(uActivePage,searchTerm,sortBy,dateFilter);
        return {
          activePage: uActivePage,
          disableNext: false,
          disablePrevious: uActivePage === 1 ? true : false,
        }
      } else {
        return {};
      }
    } else {
      return {};
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
  lifecycle({
    componentWillReceiveProps(props: IProps) {
      return 1+1;
    }
  })
)(Pager)