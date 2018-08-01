import * as DateFNS from 'date-fns';
import { connect } from 'react-redux';
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';

import { Dispatch } from '../../node_modules/redux';
import { searchNewsAPI } from '../actions/creators';
import ToggleSelect from '../components/toggle-select/toggle-select';
import toggleSelectSize from '../enums/toggleSelectSize';
import { IDateFilter } from '../models/data/IDateFilter';
import { IAppState } from './../models/view/IAppState';

const mapStateToProps = ({options}: IAppState) => ({
  page: options.activePage,
  searchTerm: options.searchingFor,
  sortBy: options.currentlySortingBy,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  filterByTime: (page: number, searchTerm: string, sortBy: ISortBy, dateFilter: IDateFilter) =>
    dispatch(searchNewsAPI(searchTerm,sortBy,page,dateFilter))
})

interface ILocalState {
  items: Array<{
    name: string;
    value: IDateFilter;
    selected: boolean;
  }>
}

interface ISortBy {
  name: string;
  value: string;
}

interface IProps {
  filterByTime: (page: number, searchTerm: string, sortBy: ISortBy, dateFilter: IDateFilter) => void;
  page: number;
  searchTerm: string;
  sortBy: ISortBy,
  dateFilter: IDateFilter
}

const defaultItems = [{
  name: 'Today',
  selected: true,
  value: {
    from: DateFNS.startOfToday(),
    to: DateFNS.endOfToday()
  } 
},{
  name: 'This Week',
  selected: false,
  value: {
    from: DateFNS.startOfWeek(DateFNS.startOfToday()),
    to: DateFNS.endOfToday()
  } ,
},{
  name: 'This Month',
  selected: false,
  value: {
    from: DateFNS.startOfMonth(DateFNS.startOfToday()),
    to: DateFNS.startOfToday()
  },
}];

interface IStateHanlders<T> extends StateHandlerMap<T> {
  onToggle: StateHandler<T>;
}

const initialState = ({items = defaultItems}: ILocalState) => ({
  items
});

const stateHandlers = {
  onToggle: ({items}: ILocalState, {filterByTime, page, searchTerm, sortBy}: IProps) => (name: string, value: IDateFilter) => {

    if(!!searchTerm) {
      filterByTime(page,searchTerm,sortBy,value);
    }
    return {
      items: items.map(x => {
        let selected = false;
        if(x.name === name) {
          selected = true;
        }
        return Object.assign({}, x, {
          selected
        })
      })
    }
  } 
}


export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHanlders<ILocalState>>(initialState, stateHandlers),
  defaultProps({
    label: 'Time',
    size: toggleSelectSize.SMALL
  })
)(ToggleSelect);
