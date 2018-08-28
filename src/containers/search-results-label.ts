import { connect } from 'react-redux';

import SearchResultsLabel from '../components/search-results-label/label';
import { IAppState } from './../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  resultsCount: state.news.searchResultsCount,
});

export default connect(
  mapStateToProps, null
)(SearchResultsLabel)