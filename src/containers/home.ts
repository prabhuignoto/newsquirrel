import { connect } from 'react-redux';
import {compose,lifecycle } from 'recompose';
import { Dispatch } from 'redux';

import { getPocketRequestToken } from '../actions/creators';
import Home from '../components/home/home';
import { IAppState } from '../models/view/IAppState';


const mapStateToProps = (state: IAppState) => ({
  mode: state.news.readingMode
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPocketRequestToken: () => dispatch(getPocketRequestToken())
})

interface IProps {
  getPocketRequestToken: () => void;
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle<IProps, {}>({
    componentDidMount() {
      this.props.getPocketRequestToken();
    }
  })
)(Home);