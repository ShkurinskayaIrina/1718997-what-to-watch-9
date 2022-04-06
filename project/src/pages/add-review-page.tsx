import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppSelector } from '../hooks';

import Logo from '../components/logo/logo';
import Review from '../components/review/review';

import { store } from '../store/index';
import { fetchFilm } from '../store/api-actions';

function AddReviewPage(): JSX.Element {
  const {id:idFilm} = useParams();

  useEffect(() => {
    store.dispatch(fetchFilm(Number(idFilm)));
  }, [idFilm]);

  const { filmCurrent } = useAppSelector(({DATA}) => DATA);
  const { id, name, backgroundImage, posterImage }  = filmCurrent;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo classLogo="logo__link"/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name} </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">

        <Review id={id} />
      </div>
  );
    </section>
  );
}

export default AddReviewPage;
