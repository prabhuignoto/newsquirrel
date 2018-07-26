import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import App from './App';
import './index.css';
import RootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import RootSaga from "./sagas";

const windowIfDefined = typeof window === 'undefined' ? null : window as any;

/* tslint-disable no-underscore-dangle */
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* tslint-enable */

const sagaMiddleware = createSagaMiddleware()
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

sagaMiddleware.run(RootSaga);
registerServiceWorker();
