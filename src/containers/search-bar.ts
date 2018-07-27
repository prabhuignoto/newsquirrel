import { connect } from 'react-redux';
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';
import { Dispatch } from 'redux';

import { searchNewsAPI } from '../actions/creators';
import SearchBar from '../components/search-bar/search-bar';
import { IAppState } from '../models/view/IAppState';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  initiateSearch: (searchTerm: string, sortField: {name: string, value: string}) => dispatch(searchNewsAPI(searchTerm, sortField))
});

const mapStateToProps = (state: IAppState) => ({
  sortingBy: state.options.currentlySortingBy
});

interface IProps {
  initiateSearch: (term: string, sortField: {name: string, value: string}) => void;
  sortingBy: {
    name: string;
    value: string;
  };
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
}

const stateHandlers = {
  handleInput: ({}: ILocalState, {initiateSearch}: IProps) => (term: string) => {
    return {
      searchTerm: term
    }
  },
  handleSearch: ({ searchTerm }: ILocalState, {initiateSearch, sortingBy}: IProps) => () =>{
    initiateSearch(searchTerm, sortingBy);
    return {};
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
  defaultProps({
    placeHolder: 'Search News'
  })
)(SearchBar)