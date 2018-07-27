import { connect } from 'react-redux';
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';

import { Dispatch } from '../../node_modules/redux';
import { sortByField } from '../actions/creators';
import ToggleSelect from '../components/toggle-select/toggle-select';
import toggleSelectSize from '../enums/toggleSelectSize';
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
  callSort: (field: ISortBy, term: string) => void;
  sortBy: ISortBy[],
  searchingFor: string;
}

const mapStateToProps = (state: IAppState) => ({
  items: state.options.sortBy.map(x => {
    let selected = false;
    if (x.name === state.options.currentlySortingBy.name) {
      selected = true;
    }
    return Object.assign({}, x, {
      selected
    })
  }),
  searchingFor: state.options.searchingFor
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  callSort: (field: ISortBy, term: string) => dispatch(sortByField(field, term))
})

const initialState = ({ items }: ILocalState) => ({
  items,
});

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onToggle: StateHandler<T>
}

const stateHandlers = {
  onToggle: ({ items }: ILocalState, {callSort, searchingFor}: IProps) => (name: string, value: string) => {
    callSort({
      name,
      value
    }, searchingFor);
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
