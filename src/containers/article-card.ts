import { connect } from 'react-redux';
import { compose, mapProps, StateHandler, StateHandlerMap, withStateHandlers } from 'recompose';

import ArticleCard from '../components/news-stand/article-card';
import NewsStandSize from '../enums/newsStandSize';
import { IAppState } from '../models/view/IAppState';
import { IArticleCard } from '../models/view/IArticleCard';


const mapStateToProps = (state: IAppState) => ({
  size: state.options.newsStandSize
})

interface ILocalState {
  imageLoaded: boolean;
  thumbnailUrl: string;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onImageLoaded: StateHandler<T>
}

const initialState = ({imageLoaded = false, thumbnailUrl}: ILocalState) => ({
  imageLoaded: thumbnailUrl && thumbnailUrl !== '' ? imageLoaded : true,
  thumbnailUrl: thumbnailUrl !== null ? thumbnailUrl : '',
});

const stateHandlers = {
  onImageLoaded: ({imageLoaded}: ILocalState) => () => ({
    imageLoaded: true
  })
}

interface IProps {
  size: NewsStandSize;
}

export default compose(
  connect(mapStateToProps, null),
  mapProps((props: IProps & IArticleCard) => {
    return props
  }),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
)(ArticleCard)