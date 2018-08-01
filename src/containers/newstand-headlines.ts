import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { Dispatch } from '../../node_modules/redux';
import { getNews } from '../actions/creators';
import NewsStand from '../components/news-stand/news-stand';
import { IAppState } from '../models/view/IAppState';

const mapsStateToProps = (state: IAppState) => ({
  articleCards: state.news.topHeadlines,
  country: state.news.selectedCountry,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getNewsFeed: (value: string, page: number, country: string) => dispatch(getNews(value, page, country)),
});

interface IProps {
  getNewsFeed: (value: string, page: number, country: string) => void;
  country: string;
}

export default compose(
  connect(mapsStateToProps, mapDispatchToProps),
  lifecycle<IProps,  {}>({
    componentDidMount() {
      this.props.getNewsFeed('general', 1, this.props.country);
    }
  }),
)(NewsStand)