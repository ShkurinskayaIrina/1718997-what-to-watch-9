import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { promiFilmDescription, genres, catalog } from './mocks/data';

ReactDOM.render(
  <React.StrictMode>
    <App promoFilm={promiFilmDescription} genresFilm={genres} catalogFilms={catalog}/>
  </React.StrictMode>,
  document.getElementById('root'));


