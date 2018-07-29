import { connect } from 'react-redux';

import Flag from '../components/flag/flag';
import { IAppState } from './../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  code: state.news.selectedCountry
});

export default connect(
  mapStateToProps, null
)(Flag);