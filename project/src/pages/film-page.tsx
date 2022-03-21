import { Link, useParams } from 'react-router-dom';
import Logo from '../components/logo/logo';

import Footer from '../components/footer/footer';
import NotFoundPage from '../components/not-found-page/not-found-page';
import FilmTabs from '../components/film-tabs/film-tabs';
import FilmList from '../components/film-list/film-list';

import { catalog, comments } from '../mocks/data';

const FILM_COUNT = 4;

function FilmPage(): JSX.Element {
  const {id} = useParams();

  const filmData = catalog.find((film) => film.id.toString() === id);

  const commentsFilm = comments.filter(({filmId}) => filmId.toString() === id);

  if (filmData === undefined) {
    return <NotFoundPage />;
  }

  const {posterImage, name, genre, released} = filmData;

  const similarFilmsList = catalog.filter((filmGenre) => filmGenre.genre === genre && filmGenre.id.toString()!==id ).slice(0,FILM_COUNT);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={posterImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo classLogo="logo__link"/>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <Link to="/login" className="user-block__link">Sign out</Link>
              </li>
            </ul>
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
                <Link to={`/films/${filmData?.id}/review`}  className="btn film-card__button">Add review</Link>
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
              <FilmTabs film = {filmData} reviews={commentsFilm} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList catalogFilms={similarFilmsList} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FilmPage;
