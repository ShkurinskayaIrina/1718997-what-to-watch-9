import { useState } from 'react';

import FilmList from '../film-list/film-list';
import GenresList from '../genres-list/genres-list';
import ButtonShowMore from '../button-show-more/button-show-more';

import { Catalog } from '../../types/films';

import { ALL_GENRES } from '../../consts';

const FILM_COUNT_PER_STEP = 8;
const MAX_GENRES_COUNT = 9;

type Props = {
  catalog: Catalog,
  genreCurrent: string,
}

function CatalogFilms({catalog, genreCurrent}: Props): JSX.Element {
  const genres = [ALL_GENRES,...new Set(catalog.map((film) => film.genre))].slice(0, MAX_GENRES_COUNT);
  const filmsByGenre = genreCurrent===ALL_GENRES ? catalog :catalog.filter((film) => film.genre === genreCurrent);

  const [renderedFilmsCount, setRenderedFilmsCount] = useState(FILM_COUNT_PER_STEP);
  const filmsForRender = filmsByGenre.slice(0,renderedFilmsCount);

  function handleShowMoreButtonClick() {
    setRenderedFilmsCount(Math.min(filmsByGenre.length, renderedFilmsCount + FILM_COUNT_PER_STEP));
  }

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList genresList={genres} genreCurrent={genreCurrent} />

      <FilmList catalogFilms={filmsForRender} />

      {filmsByGenre.length>renderedFilmsCount ? <ButtonShowMore onAddReview={handleShowMoreButtonClick}/> :''}
    </section>
  );
}

export default CatalogFilms;
