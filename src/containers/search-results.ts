import { connect } from 'react-redux';

import SearchResults from '../components/search-results/search-results';
import { IAppState } from '../models/view/IAppState';


const mapStateToProps = ({news}: IAppState) => ({
  failureResponse: news.failureResponse,
  hasResults: news.searchResultsCount > 0,
  totalResults: news.totalResults,
});

export default connect(mapStateToProps, null)(SearchResults);