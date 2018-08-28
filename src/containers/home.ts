import { connect } from 'react-redux';

import Home from '../components/home/home';
import { IAppState } from '../models/view/IAppState';


const mapStateToProps = (state: IAppState) => ({
  mode: state.news.readingMode
});

export default connect(mapStateToProps, null)(Home);