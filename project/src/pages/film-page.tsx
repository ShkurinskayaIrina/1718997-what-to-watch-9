import { Link, useParams, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { useAppSelector } from '../hooks';

import Logo from '../components/logo/logo';
import User from '../components/user/user';
import Footer from '../components/footer/footer';
import FilmTabs from '../components/film-tabs/film-tabs';
import FilmList from '../components/film-list/film-list';
import ButtonFavoriteAdd from '../components/button-favorite-add/button-favorite-add';
import NotFoundPage from '../components/not-found-page/not-found-page';
import Preloader from '../components/preloader/preloader';
import { AuthorizationStatus } from '../consts';

import { store } from '../store/index';
import { fetchFilm, fetchComments, fetchSimilarFilms } from '../store/api-actions';

import { searchFilm } from '../films';

const SIMILAR_FILM_COUNT = 4;

function FilmPage(): JSX.Element {
  const {id:idFilm} = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    store.dispatch(fetchFilm(Number(idFilm)));
    store.dispatch(fetchComments(Number(idFilm)));
    store.dispatch(fetchSimilarFilms(Number(idFilm)));
  }, [idFilm]);

  const { catalog, filmCurrent, comments , similarFilms } = useAppSelector(({DATA}) => DATA);
  const { userData,  authorizationStatus:authorizationStatusUser } = useAppSelector(({USER}) => USER);
  const { id, backgroundImage, name, genre, released, posterImage, isFavorite } = filmCurrent;

  const similarFilmsList = similarFilms.slice(0,SIMILAR_FILM_COUNT);

  const filmFind = searchFilm(catalog, Number(id));

  if (filmFind === null) {
    return <Preloader />;
  }

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
                <button onClick={() => navigate(`/player/${id}`)}  className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <ButtonFavoriteAdd id={id} isFavorite={Number(isFavorite)} isPromo={Number(Boolean(0)) } />

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
