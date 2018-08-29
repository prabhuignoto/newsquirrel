import { connect } from 'react-redux';
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';

import { Dispatch } from '../../node_modules/redux';
import { sortArticlesByTime } from '../actions/creators';
import ToggleSelect from '../components/toggle-select/toggle-select';
import toggleSelectSize from '../enums/toggleSelectSize';
import { IDateFilter } from '../models/data/IDateFilter';
import { ToggleType } from '../models/view/IToggleSelect';
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
  sortBy: ISortBy[],
  dateFilter: IDateFilter;
  SortArticles: (dir: string) => void;
}

const mapStateToProps = ({news}: IAppState) => ({
  items: news.sortByTime.map(x => {
    let selected = false;
    if (x.name === news.activeSortByTime.name) {
      selected = true;
    }
    return Object.assign({}, x, {
      selected
    })
  }),
  sortBy: news.activeSortByTime
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  SortArticles: (dir: string) => dispatch(sortArticlesByTime(dir))
})

const initialState = ({ items }: ILocalState) => ({
  items,
});

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onToggle: StateHandler<T>
}

const stateHandlers = {
  onToggle: ({ items }: ILocalState, {  SortArticles }: IProps) => (name: string, value: string) => {
    SortArticles(value);
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
    size: toggleSelectSize.SMALL,
    type: ToggleType.SORT_ARTICLES
  })
)(ToggleSelect)
