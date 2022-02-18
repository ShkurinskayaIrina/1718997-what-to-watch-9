import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { promiFilmDescription, genresFilm, catalogFilms } from './mocks/data';

ReactDOM.render(
  <React.StrictMode>
    <App promoFilm={promiFilmDescription} genresFilm={genresFilm} catalogFilms={catalogFilms}/>
  </React.StrictMode>,
  document.getElementById('root'));
