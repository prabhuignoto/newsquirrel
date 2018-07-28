import { connect } from 'react-redux';

import Loader from '../components/loader/loader';
import { IAppState } from './../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  start: state.news.isAppBusy,
  stop: !state.news.isAppBusy
});

export default connect(mapStateToProps, null)(Loader);
