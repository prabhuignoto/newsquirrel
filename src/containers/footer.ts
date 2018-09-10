import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import Footer from '../components/footer/footer';
import { AppMode } from './../enums/appMode';

export default graphql(gql`{
  appMode @client
}`, {
  props: ({data: {appMode}, mutate}: any) => ({
    appMode: {name: 'ard', value: AppMode.LIGHT},
  })
})(Footer)

