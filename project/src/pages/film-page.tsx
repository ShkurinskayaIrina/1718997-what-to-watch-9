import { Link } from 'react-router-dom';
import Logo from '../components/logo/logo';
import { Film } from '../types/films';

type Props = {
  film: Film;
}

// type Rating = {
//   from: number,
//   to: number,
// }

// type RatingRangeProps = {
//   [key: string]: Rating,
// };

// export const ratingRange:RatingRangeProps = {
//   bad: {
//     from: 0,
//     to: 3,
//   },
//   normal: {
//     from: 3,
//     to: 5,
//   },
//   good: {
//     from: 5,
//     to: 8,
//   },
//   veryGood: {
//     from: 8,
//     to:10,
//   },
//   awesome: {
//     from:10,
//     to:100,
//   },
// };

// function getRatingDesctiption():void {
//   const rating=1;
//   Object.keys(ratingRange).forEach((key) => {
//     if ((rating > ratingRange[key].from || rating === ratingRange[key].from) &&
//   rating < ratingRange[key].to) {
//       return key;
//     }
//   }, ratingRange);
// }

function FilmPage({film}:Props): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.posterImage} alt={film.name} />
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
                <Link to="/login" className="user-block__link">Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
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
                <Link to="/films/:id/review" className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage}  alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to="/films/:id" className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="/films/:id/details" className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="/films/:id/reviews" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{film.rating}</div>
                <p className="film-rating__meta">
                  {/* так нельзя? надо делать отдельный компонент на одну эту строчку? */}
                  {/* <span className="film-rating__level">{getRatingDesctiption}</span> */}
                  <span className="film-rating__count">{`${film.scoresCount} ratings`}</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film.description}</p>
                {/* <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.</p>

                <p>Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p> */}

                <p className="film-card__director"><strong>{`Director: ${film.director}`}</strong></p>

                <p className="film-card__starring"><strong>{`Starring: ${film.starring}`}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        {/* это надо трогать сейчас? */}
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link to="/films/:id" className="small-film-card__link">Fantastic Beasts: The Crimes of Grindelwald</Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link to="/films/:id" className="small-film-card__link">Bohemian Rhapsody</Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link to="/films/:id" className="small-film-card__link">Macbeth</Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link to="/films/:id" className="small-film-card__link">Aviator</Link>
              </h3>
            </article>
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
    </>
  );
}

export default FilmPage;
