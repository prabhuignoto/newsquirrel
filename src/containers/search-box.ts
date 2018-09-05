import { FormEvent } from 'react';
import { connect } from 'react-redux';
import { compose, StateHandler, StateHandlerMap, withStateHandlers, lifecycle } from 'recompose';
import { Dispatch } from 'redux';
import {searchNewsAPI} from '../actions/creators';
import SearchBox from '../components/search-box/box';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  searchNews: (term: string) => dispatch(searchNewsAPI(term))
});

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onSearch: StateHandler<T>;
}

interface IProps {
  searchNews: (term: string) => void;
  onInput: (term: string) => void;
  clearField: (term: string) => void;
  onRef: (ref: any) => void;
  cleared: boolean;
}

interface ILocalState {
  value: string;
}

const initialState = ({value = '', cleared= false}) => ({
  cleared,
  value,
});

let inputRef: HTMLInputElement;

const stateHandlers = {
  clearField: (state: ILocalState, {searchNews}: IProps) => () => {
    searchNews("");
    return {
      cleared: true,
      value: '',
    };
  },
  onInput: (state: ILocalState, {searchNews}: IProps) => (ev: KeyboardEvent & FormEvent<HTMLInputElement>) => {
   const value = (ev.target as HTMLInputElement).value;
   if(value === "") {
    searchNews("");
   }
   return {
     cleared: false,
     value,
   };
  },
  onRef: () => (ref: any) => {
    inputRef = ref;
    return {};
  },
  onSearch: ({value}: ILocalState, {searchNews}: IProps) => (ev: KeyboardEvent & FormEvent<HTMLInputElement>) => {
    if(ev.keyCode === 13) {
      searchNews((ev.target as HTMLInputElement).value);
    }
    return {
      value
    };
  },
  
}

export default compose(
  connect(null, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
  lifecycle({
    componentWillReceiveProps(props: IProps) {
      if(props.cleared) {
        inputRef.focus();
      }
    }
  })
)(SearchBox)