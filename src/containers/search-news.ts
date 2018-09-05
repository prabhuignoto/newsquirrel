import { connect } from 'react-redux';
import SearchNews from '../components/news-stand/search-news';
import { IAppState } from '../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  appMode: state.options.defaultAppMode,
  openQuickView: state.news.quickViewEnabled,
  quickViewOpen: state.news.quickViewEnabled,
  quickViewPosition: state.news.quickViewPosition,
  quickViewUrl: state.news.quickViewUrl,
  term: state.news.searchTerm,
});

export default connect(mapStateToProps, null)(SearchNews);
