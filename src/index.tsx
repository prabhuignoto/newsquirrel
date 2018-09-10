import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import * as ReactDOM from 'react-dom';
import ApolloClient from './apollo/client';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ApolloProvider client={ApolloClient}>
      <App />
    </ApolloProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
