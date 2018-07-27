import { connect } from 'react-redux';

import Navbar from '../components/navbar/navbar';
import { IAppState } from './../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  mode: state.options.readingMode
});

export default connect(mapStateToProps, null)(Navbar);