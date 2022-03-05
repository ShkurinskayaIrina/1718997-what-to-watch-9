import { Link } from 'react-router-dom';
import Logo from '../components/logo/logo';
import SmallFilmCard from '../components/small-film-card/small-film-card';
import { Film } from '../types/films';

type Props = {
  catalogFilms: Film[],
};

function MyListPage({catalogFilms}:Props): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

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

        <div className="catalog__films-list">
          <SmallFilmCard catalogFilms={catalogFilms}/>
        </div>
      </section>

      <footer className="page-footer">
        {/* claccName='logo__link--light' */}
        <Logo />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListPage;
