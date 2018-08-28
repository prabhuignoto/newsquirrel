import { connect } from 'react-redux';

import Error from '../components/info-pages/error';
import { IAppState } from './../models/view/IAppState';


const mapStateToProps = (state: IAppState) => ({
  message: state.news.failureResponse
});

export default connect(mapStateToProps, null)(Error);