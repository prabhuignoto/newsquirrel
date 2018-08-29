import { connect } from 'react-redux';
import Footer from '../components/footer/footer';
import { IAppState } from './../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  appMode: state.options.defaultAppMode,
});

export default connect(mapStateToProps, null)(Footer);