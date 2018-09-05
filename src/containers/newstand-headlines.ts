import { connect } from "react-redux";
import {
  compose,
  StateHandler,
  StateHandlerMap,
  withStateHandlers
} from "recompose";

import { Dispatch } from "../../node_modules/redux";
import { closeArticle} from "../actions/creators";
import NewsStand from "../components/news-stand/news-stand";
import { IAppState } from "../models/view/IAppState";

const mapsStateToProps = (state: IAppState) => ({
  appMode: state.options.defaultAppMode,
  articleCards: state.news.topHeadlines,
  category: state.options.filter.categories[0],
  country: state.news.selectedCountry,
  openQuickView: state.news.quickViewEnabled,
  quickViewOpen: state.news.quickViewEnabled,
  quickViewPosition: state.news.quickViewPosition,
  quickViewUrl: state.news.quickViewUrl,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeArticlePane: () => dispatch(closeArticle()),
});

interface IProps {
  closeArticlePane: () => void;
  country: string;
  detailedArticleUrl: string;
  detailedPaneOpen: boolean;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  closeQuickView: StateHandler<T>;
  onQuickViewLoadComplete: StateHandler<T>;
  onError: StateHandler<T>;
}

const stateHandlers = {
  closeQuickView: (state: any, { closeArticlePane }: IProps) => () => {
    closeArticlePane();
    return {};
  },
  onError: () => (ev: any) => ({
    quicViewLoading: false,
    quickLoadingFailed: true,
  }),
  onQuickViewLoadComplete: () => () => ({
    quickViewLoading: false
  }),
};

interface ILocalState {
  paneClosed: boolean;
  quickViewLoading: boolean;
  quickLoadingFailed: boolean;
  quickViewError: any;
}

const initialState = ({ paneClosed = false, quickViewLoading = true, quickLoadingFailed = false, quickViewError = {} }) => ({
  paneClosed,
  quickLoadingFailed,
  quickViewError,
  quickViewLoading,
});

export default compose(
  connect(
    mapsStateToProps,
    mapDispatchToProps
  ),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(
    initialState,
    stateHandlers
  )
)(NewsStand);
