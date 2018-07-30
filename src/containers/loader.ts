import { connect } from 'react-redux';
import { compose, defaultProps } from 'recompose';

import Loader from '../components/loader/loader';
import LoaderSize from '../enums/loaderSize';
import { IAppState } from './../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  start: state.news.isAppBusy,
  stop: !state.news.isAppBusy
});

export default compose(
  connect(mapStateToProps, null),
  defaultProps({
    size: LoaderSize.SMALL
  })
)(Loader);
