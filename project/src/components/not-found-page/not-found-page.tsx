import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <section className="film-card">

        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link"  href="/">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__desc">
              <h2 className="film-card__title">404 :( Такой страницы не существует</h2>
              <Link className='user-block__link' to="/">Вернуться на главную</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="page-footer">
        {/* claccName='logo__link--light' */}
        <Logo />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </>
  );
}

export default NotFoundPage;
