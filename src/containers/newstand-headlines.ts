import { connect } from "react-redux";
import NewsStand from "../components/news-stand/news-stand";
import { IAppState } from '../models/view/IAppState';

const mapsStateToProps = (state: IAppState) => ({
  articleCards: state.news.topHeadlines,
});

export default connect(mapsStateToProps, null)(NewsStand)