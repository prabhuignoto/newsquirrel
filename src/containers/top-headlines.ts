import { connect } from 'react-redux';
import TopHeadlines from '../components/top-headlines/top-headlines';
import { IAppState } from './../models/view/IAppState';


const mapStateToProps = (state: IAppState) => ({
  appMode: state.options.defaultAppMode,
});

export default connect(mapStateToProps, null)(TopHeadlines);
