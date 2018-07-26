import { connect } from 'react-redux';
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';
import { Dispatch } from 'redux';

import { searchNewsAPI } from '../actions/creators';
import SearchBar from '../components/search-bar/search-bar';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  initiateSearch: (searchTerm: string) => dispatch(searchNewsAPI(searchTerm))
});

interface IProps {
  initiateSearch: (term: string) => void;
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
  handleSearch: ({ searchTerm }: ILocalState, {initiateSearch}: IProps) => () =>{
    initiateSearch(searchTerm);
    return {};
  }
}

export default compose(
  connect(null, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
  defaultProps({
    placeHolder: 'Search News'
  })
)(SearchBar)