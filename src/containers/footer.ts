import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import Footer from '../components/footer/footer';
import { AppMode } from './../enums/appMode';

export default graphql(gql`{
  appMode @client {
    value
  }
}`, {
  props: ({data: {appMode}, mutate}: any) => ({
    appMode,
  })
})(Footer)

