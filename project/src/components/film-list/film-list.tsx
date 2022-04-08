import FilmCard from '../film-card/film-card';
import { Film } from '../../types/films';

type Props = {
  catalogFilms: Film[],
};

function FilmList({catalogFilms}: Props): JSX.Element {
  return (
    <div className="catalog__films-list">
      {catalogFilms.map((film) => (
        <FilmCard key={film.id} film={film}/>
      ))}
    </div>
  );
}

export default FilmList;
