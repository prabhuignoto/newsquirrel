import { connect } from 'react-redux';
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';

import { Dispatch } from '../../node_modules/redux';
import { switchNewsReadingMode } from '../actions/creators';
import ToggleSelect from '../components/toggle-select/toggle-select';
import ReadingMode from '../enums/readingMode';
import toggleSelectSize from '../enums/toggleSelectSize';
import { IAppState } from '../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  activeMode: state.news.readingMode
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  switchReadingMode: (mode: ReadingMode) => dispatch(switchNewsReadingMode(mode))
});

interface IItem {
  name: string,
  value: string,
  id: ReadingMode,
  selected: boolean,
}

interface ILocalState {
  activeMode: ReadingMode;
  items: IItem[];
}

interface IProps {
  switchReadingMode: (mode: ReadingMode) => void;
  activeMode: ReadingMode;
}

const initialState = ({
  activeMode,
  items = [{
    id: ReadingMode.TOP_HEADLINES,
    name: 'Headlines',
    selected: true,
    value: 'top-headlines',
  }, {
    id: ReadingMode.SEARCH_EVERYTHING,
    name: 'Search',
    selected: false,
    value: 'search-news',
  }]}: ILocalState) => ({
  activeMode,
  items
});

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onToggle: StateHandler<T>
}

const stateHandlers = {
  onToggle: ({activeMode, items}: ILocalState, {switchReadingMode}: IProps) => (name: string, value: string) => {
    const result = items.find(item => item.name === name) as IItem;
    switchReadingMode(result.id);
    return {
      items: items.map(x => {
        let selected = false;
        if(x.name === name) {
          selected = true;
        }
        return Object.assign({}, x, {
          selected
        });
      })
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
  defaultProps({
    size: toggleSelectSize.LARGE,
    theme: 'blue'
  })
)(ToggleSelect)

