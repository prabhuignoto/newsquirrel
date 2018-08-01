import { connect } from 'react-redux';
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';

import { Dispatch } from '../../node_modules/redux';
import { searchNewsAPI } from '../actions/creators';
import ToggleSelect from '../components/toggle-select/toggle-select';
import toggleSelectSize from '../enums/toggleSelectSize';
import { IDateFilter } from '../models/data/IDateFilter';
import { IAppState, ISortBy } from './../models/view/IAppState';

interface IOption {
  name: string;
  value: string;
  selected: boolean;
}

interface ILocalState {
  items: IOption[];
}

interface IProps {
  searchNews: (page: number, searchTerm: string, sortBy: ISortBy, dateFilter: IDateFilter) => void;
  sortBy: ISortBy[],
  searchTerm: string;
  dateFilter: IDateFilter;
  page: number;

}

const mapStateToProps = ({options}: IAppState) => ({
  dateFilter: options.dateFilter,
  items: options.sortBy.map(x => {
    let selected = false;
    if (x.name === options.currentlySortingBy.name) {
      selected = true;
    }
    return Object.assign({}, x, {
      selected
    })
  }),
  page: options.activePage,
  searchTerm: options.searchingFor,
  sortBy: options.currentlySortingBy
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchNews: (page: number, searchTerm: string, sortBy: ISortBy, dateFilter: IDateFilter) =>
    dispatch(searchNewsAPI(searchTerm, sortBy, 1, dateFilter))
})

const initialState = ({ items }: ILocalState) => ({
  items,
});

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onToggle: StateHandler<T>
}

const stateHandlers = {
  onToggle: ({ items }: ILocalState, { searchNews, searchTerm, sortBy, page, dateFilter }: IProps) => (name: string, value: string) => {
    if(!!searchTerm) {
      searchNews(page, searchTerm, {
        name,
        value
      }, dateFilter);
    }
    return {
      items: items.map(x => {
        if (x.value === value) {
          return Object.assign({}, x, {
            selected: true
          })
        } else {
          return Object.assign({}, x, {
            selected: false
          })
        }
      })
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
  defaultProps({
    label: 'Sort By',
    size: toggleSelectSize.SMALL
  })
)(ToggleSelect)
