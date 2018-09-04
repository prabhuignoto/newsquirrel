import { connect } from 'react-redux';
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';
import SearchBar from '../components/search-bar/search-bar';
import { IDateFilter } from '../models/data/IDateFilter';
import { IAppState } from '../models/view/IAppState';


const mapStateToProps = ({options}: IAppState) => ({
  dateFilter: options.dateFilter,
  page: options.activePage,
  sortingBy: options.currentlySortingBy,
});

interface IProps {
  initiateSearch: (term: string, sortField: {name: string, value: string}, page: number, dateFilter: IDateFilter) => void;
  clearSearch: () => void;
  sortingBy: {
    name: string;
    value: string;
  };
  page: number;
  dateFilter: IDateFilter
}

interface ILocalState {
  searchTerm: string;
}

const initialState = ({searchTerm=''}) => ({
  searchTerm
})

interface IStateHandlers<T> extends StateHandlerMap<T> {
  handleInput: StateHandler<T>;
  handleSearch: StateHandler<T>;
  handleClear: StateHandler<T>;
}

const stateHandlers = {
  handleClear: (state: ILocalState, {clearSearch}: IProps) => () =>  {
    clearSearch();
    return {
      searchTerm: ''
    };
  },
  handleInput: ({}: ILocalState, {initiateSearch}: IProps) => (term: string) => {
    return {
      searchTerm: term
    }
  },
  handleSearch: ({ searchTerm }: ILocalState, {initiateSearch, sortingBy, page, dateFilter}: IProps) => () =>{
    initiateSearch(searchTerm, sortingBy, 1, dateFilter);
    return {};
  },
}

export default compose(
  connect(mapStateToProps, null),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
  defaultProps({
    placeHolder: 'Search News'
  })
)(SearchBar)