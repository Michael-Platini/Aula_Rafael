import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise';

import App from './main/app';
import reducers from './main/reducers'

const devTolls = window._REDUX_DEVTOOLS_EXTENSION_
      && window._REDUX_DEVTOOLS_EXTENSION_()
const store = applyMiddleware(promise)(createStore)(reducers, devTolls)
ReactDOM.render(
    <Provider store={store}>
     <App />
    </Provider> 
, document.getElementById('app'));