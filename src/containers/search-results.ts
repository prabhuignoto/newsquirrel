import { connect } from 'react-redux';

import SearchResults from '../components/search-results/search-results';
import { IAppState } from '../models/view/IAppState';


const mapStateToProps = (state: IAppState) => ({
  hasResults: state.news.searchResultsCount > 0,
  totalResults: state.news.totalResults,
});

export default connect(mapStateToProps, null)(SearchResults);