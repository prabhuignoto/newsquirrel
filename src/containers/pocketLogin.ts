import { connect } from 'react-redux';
import { branch, compose, defaultProps, renderComponent, renderNothing } from 'recompose';
import { IAppState } from '../models/view/IAppState';
import { PocketLogin } from './../components/PocketLogin/PocketLogin';

const mapStateToProps = (state: IAppState) => ({
  requestToken: state.news.pocketConfig.requestToken
});

export default compose(
  connect(mapStateToProps, null),
  defaultProps({
    loginUrl: 'https://getpocket.com/auth/authorize?request_token=',
    redirectURI: 'http://localhost:3000'
  }),
  branch(
    ({requestToken}: any) => !!requestToken,
    renderComponent(PocketLogin),
    renderNothing
  ),
)(PocketLogin);