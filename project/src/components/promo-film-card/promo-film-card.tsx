import User from '../../components/user/user';
import Logo from '../logo/logo';

import { PromoFilm } from '../../types/films';
import { UserData } from '../../types/user-data';

import { AuthorizationStatus } from '../../consts';

type Props = {
  promo: PromoFilm,
  userData: UserData,
  authorizationStatus: AuthorizationStatus,
}

function PromoFilmCard({promo, userData, authorizationStatus} :Props): JSX.Element {

  const { backgroundImage, name, posterImage, genre, released } = promo;

  return (
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
  );
}
export default PromoFilmCard;
