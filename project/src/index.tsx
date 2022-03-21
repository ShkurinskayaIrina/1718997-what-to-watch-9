import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store';

import { catalog } from './mocks/data';
import { getRandomPositive } from './mocks/utils';

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        promoFilm={catalog[getRandomPositive(0,7)]}
        catalogFilms={catalog}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));


