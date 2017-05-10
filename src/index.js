import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import configureStore from './store'

const store = configureStore()

import App from './components/app/App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='' component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);