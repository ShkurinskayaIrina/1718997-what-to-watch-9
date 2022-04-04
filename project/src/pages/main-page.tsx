import { useState } from 'react';

import User from '../components/user/user';
import FilmList from '../components/film-list/film-list';
import GenresList from '../components/genres-list/genres-list';
import Footer from '../components/footer/footer';
import Logo from '../components/logo/logo';
import ButtonShowMore from '../components/button-show-more/button-show-more';

import { useAppSelector } from '../hooks/';

import { ALL_GENRES, MAX_GENRES_COUNT, FILM_COUNT_PER_STEP } from '../consts';

function MainPage(): JSX.Element {

  const { catalog, promo, genreCurrent, userData, authorizationStatus }= useAppSelector((state) => state);
  const { backgroundImage, name, posterImage, genre, released } = promo;

  const genres = [ALL_GENRES,...new Set(catalog.map((film) => film.genre))].slice(0, MAX_GENRES_COUNT);
  const filmsByGenre = genreCurrent===ALL_GENRES ? catalog :catalog.filter((film) => film.genre === genreCurrent);

  const [renderedFilmsCount, setRenderedFilmsCount] = useState(FILM_COUNT_PER_STEP);
  const filmsForRender = filmsByGenre.slice(0,renderedFilmsCount);

  function handleShowMoreButtonClick() {
    setRenderedFilmsCount(Math.min(filmsByGenre.length, renderedFilmsCount + FILM_COUNT_PER_STEP));
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo classLogo="logo__link" />
          <User userData={userData} authorizationStatus={authorizationStatus}/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`}  width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genresList={genres} genreCurrent={genreCurrent} />

          <FilmList catalogFilms={filmsForRender} />

          {filmsByGenre.length>renderedFilmsCount ? <ButtonShowMore onAddReview={handleShowMoreButtonClick}/> :''}
        </section>
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
