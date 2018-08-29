import { connect } from "react-redux";
import {
  compose,
  lifecycle,
  StateHandler,
  StateHandlerMap,
  withStateHandlers
} from "recompose";

import { Dispatch } from "../../node_modules/redux";
import { closeArticle, getNews } from "../actions/creators";
import NewsStand from "../components/news-stand/news-stand";
import { IAppState } from "../models/view/IAppState";

const mapsStateToProps = (state: IAppState) => ({
  appMode: state.options.defaultAppMode,
  articleCards: state.news.topHeadlines,
  country: state.news.selectedCountry,
  detailedArticleUrl: state.options.detailedArticleUrl,
  detailedPaneOpen: state.options.detailedPaneOpen,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeArticlePane: () => dispatch(closeArticle()),
  getNewsFeed: (value: string, page: number, country: string) =>
    dispatch(getNews(value, page, country))
});

interface IProps {
  getNewsFeed: (value: string, page: number, country: string) => void;
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
  ),
  lifecycle<IProps, {}>({
    componentDidMount() {
      this.props.getNewsFeed("general", 1, this.props.country);
    },
    componentWillReceiveProps(props) {
      if(props.detailedPaneOpen) {
        const ft = fetch(props.detailedArticleUrl);
        ft.catch(error => this.setState({
          quickViewError: error
        }))
      }
    },
  })
)(NewsStand);
