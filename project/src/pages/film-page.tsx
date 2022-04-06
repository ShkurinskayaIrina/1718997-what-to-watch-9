import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import {useAppSelector} from '../hooks';

import Logo from '../components/logo/logo';
import User from '../components/user/user';
import Footer from '../components/footer/footer';
import NotFoundPage from '../components/not-found-page/not-found-page';
import FilmTabs from '../components/film-tabs/film-tabs';
import FilmList from '../components/film-list/film-list';

import { AuthorizationStatus } from '../consts';

import { store } from '../store/index';
import { fetchFilm, fetchComments, fetchSimilarFilms } from '../store/api-actions';

const SIMILAR_FILM_COUNT = 4;

function FilmPage(): JSX.Element {
  const {id:idFilm} = useParams();

  useEffect(() => {
    store.dispatch(fetchFilm(Number(idFilm)));
    store.dispatch(fetchComments(Number(idFilm)));
    store.dispatch(fetchSimilarFilms(Number(idFilm)));
  }, [idFilm]);

  const { catalog, filmCurrent, comments , similarFilms } = useAppSelector(({DATA}) => DATA);
  const { userData,  authorizationStatus:authorizationStatusUser } = useAppSelector(({USER}) => USER);
  const { id, backgroundImage, name, genre, released, posterImage } = filmCurrent;

  const similarFilmsList = similarFilms.slice(0,SIMILAR_FILM_COUNT);

  const filmFind = catalog.find((film) => film.id.toString() === idFilm);

  if (filmFind === undefined) {
    return <NotFoundPage />;
  }

  function ButtonAddReview():JSX.Element {
    return (
      <Link to={`/films/${id}/review`}  className="btn film-card__button">Add review</Link>
    );
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">

            <Logo classLogo="logo__link"/>

            <User userData={userData} authorizationStatus={authorizationStatusUser}/>
          </header>

          <div className="film-card__wrap">
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
                {authorizationStatusUser===AuthorizationStatus.Auth? <ButtonAddReview /> : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage}  alt={`${name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <FilmTabs film = {filmCurrent} reviews={comments} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList catalogFilms={similarFilmsList}/>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
