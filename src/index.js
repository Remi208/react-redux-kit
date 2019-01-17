import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './containers/App/';
import {rootReducer, initialState} from './store/app/reducer';

import './index.scss'

const store = createStore(rootReducer, initialState);

render(
  <div className="wrapper">
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
);