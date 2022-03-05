import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { genres } from './const';
import { catalog } from './mocks/data';
import { getRandomPositive } from './mocks/utils';

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={catalog[getRandomPositive(0,7)]}
      genresFilm={genres}
      catalogFilms={catalog}
    />
  </React.StrictMode>,
  document.getElementById('root'));


