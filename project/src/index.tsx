import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';

import { store } from './store/index';
import { fetchCatalog, fetchPromo, checkAuthAction } from './store/api-actions';

store.dispatch(fetchCatalog());
store.dispatch(fetchPromo());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));


