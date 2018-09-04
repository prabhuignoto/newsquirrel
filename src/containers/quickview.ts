import { connect } from 'react-redux';
import { compose, StateHandler, StateHandlerMap, withProps, withStateHandlers } from 'recompose';
import { Dispatch } from 'redux';
import { closeQuickView } from '../actions/creators';
import QuickView from '../components/quickview/quickview';
import { IAppState } from '../models/view/IAppState';
import { IQuickView } from '../models/view/IQuickView';

const mapStateToProps = (state:IAppState) => ({
  open: state.news.quickViewEnabled,
  quickViewData: state.news.quickViewData,
  quickViewLoading: state.news.quickViewLoading,
  quickViewUrl: state.news.quickViewUrl,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  close: () => dispatch(closeQuickView())
});

interface IProps {
  close: () => void;
  quickViewData: IQuickView
}

interface IStateHandler<T> extends StateHandlerMap<T> {
  closeQuickView: StateHandler<T>;
}

const stateHandlers = {
  closeQuickView: (state: any, {close}: IProps) => () => {
    close();
    return{};
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<{}, IStateHandler<{}>>({}, stateHandlers),
)(QuickView)