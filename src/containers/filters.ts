import { connect } from "react-redux";
import { compose, StateHandler, StateHandlerMap, withStateHandlers } from "recompose";
import { Dispatch } from "redux";
import { getNews, updateNewsCategory } from "../actions/creators";
import Filters from '../components/filters/filters';
import { IFilter } from '../models/data/IFilter';
import { IAppState } from '../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  country: state.news.selectedCountry,
  items: state.options.defaultCategories.map(x => ({
    name: x,
    value: x
  })),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getNewsFeed: (value: string, page: number, country: string) => dispatch(getNews(value, page, country)),
  updateCategory: (filter: IFilter) => dispatch(updateNewsCategory(filter))
});

interface IStateHandlers<T> extends StateHandlerMap<T> {
  selectFilter: StateHandler<T>
}

interface ILocalState {
  selectedFilter: IFilter;
}

interface IProps {
  updateCategory: (filter: IFilter) => void;
  getNewsFeed: (value: string, page: number, country: string) => void;
  country: string;
}

const initialState = ({
  selectedFilter = {
    name: 'category',
    value: 'science'
  }
}:{selectedFilter: IFilter}) => ({
  selectedFilter
});

const stateHandlers = {
  selectFilter: (state: ILocalState, {updateCategory, getNewsFeed, country}: IProps) => (filter: IFilter) => {
    updateCategory(filter);
    getNewsFeed(filter.value, 1, country);
    return {
      selectedFilter: filter
    };
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers)
)(Filters)