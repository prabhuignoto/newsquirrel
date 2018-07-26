import { connect } from "react-redux";
import { compose, StateHandler, StateHandlerMap, withStateHandlers } from "recompose";
import { Dispatch } from "redux";
import { navToNextPage, navToPrevPage } from "../actions/creators";
import Pager from "../components/pager/pager";
import { IAppState } from '../models/view/IAppState';


const mapStateToProps = (state: IAppState) => ({
  activePage: state.options.activePage,
  category: state.options.filter.categories[0],
  country: state.news.selectedCountry,
  totalPages: (Math.ceil(state.news.totalResults/12)),
});

interface IProps {
  navigateBackward: (page: number, category: string, country: string) => void;
  navigateForward: (page: number, category: string, country: string) => void;
  category:string;
  totalPages: number;
  country: string;
}

interface ILocalState {
  activePage: number;
  disableNext: boolean;
  disablePrevious: boolean;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onNext: StateHandler<T>;
  onPrevious : StateHandler<T>;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  navigateBackward: (page: number, category: string, country: string) => dispatch(navToNextPage(page, category, country)),
  navigateForward: (page: number, category: string, country: string) => dispatch(navToPrevPage(page, category, country)),
})

const initialState = ({ activePage = 1, disableNext= false, disablePrevious= true }: ILocalState) => ({
  activePage,
  disableNext,
  disablePrevious
});

const stateHandlers = {
  onNext: ({activePage, disableNext}: ILocalState, {navigateForward, category, totalPages, country}: IProps) => () => {
    const [uActivePage] = [activePage + 1];
    if(uActivePage <= totalPages) {
      navigateForward(uActivePage, category, country);
      return {
        activePage: uActivePage,
        disableNext: uActivePage === totalPages ? true: false,
        disablePrevious: false
      }
    } else {
      return {};
    }
  },
  onPrevious: ({activePage, disablePrevious}: ILocalState, {navigateBackward, category, totalPages, country}: IProps) => () => {
    const [uActivePage] = [activePage - 1];
    if(uActivePage <= totalPages && uActivePage > 0) {
      navigateBackward(uActivePage, category, country);
      return {
        activePage: uActivePage,
        disableNext: false,
        disablePrevious: uActivePage === 1 ? true : false,
      }
    } else {
      return {};
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers)
)(Pager)