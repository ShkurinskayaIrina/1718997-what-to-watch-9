import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import {useAppSelector} from '../hooks';

import Logo from '../components/logo/logo';
import Footer from '../components/footer/footer';
import FilmList from '../components/film-list/film-list';

import { store } from '../store/index';
import { fetchFavoriteAction } from '../store/api-actions';

function MyListPage(): JSX.Element {

  useEffect(() => {
    store.dispatch(fetchFavoriteAction());
  }, []);

  const { favoriteFilms } = useAppSelector(({DATA}) => DATA);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo classLogo="logo__link" />

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList catalogFilms={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyListPage;
