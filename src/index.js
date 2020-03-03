// REACT/REDUX
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
// REDUX MIDDLEWARES
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// CONTAINERS
import App from './containers/App';
// REDUCERS
import { searchRobots, requestRobots } from './reducers';
// STYLES
import 'tachyons';
import './index.css';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
