import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { Film } from '../../types/films';

type FilmTypeProps = {
  catalogFilm: Film;
  onMouseEnterCallback: (film: Film) => void;
  onMouseEnterCallbackOut: () => void;
}

function FilmCard( props: PropsWithChildren<FilmTypeProps>): JSX.Element {
  const { catalogFilm, onMouseEnterCallback, onMouseEnterCallbackOut, children } = props;
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => onMouseEnterCallback(catalogFilm)}
      onMouseOut={() => onMouseEnterCallbackOut()}
    >
      <div className="small-film-card__image">
        {children || <img src={catalogFilm.posterImage} alt={catalogFilm.name} width='280' height='175' />}
      </div>
      <h3 className="small-film-card__title">
        <Link to="/films/:id" className="small-film-card__link">{catalogFilm.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
