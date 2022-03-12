import FilmCard from '../film-card/film-card';

import { Film } from '../../types/films';

type Props = {
  catalogFilms: Film[],
};

function Filmlist({catalogFilms}: Props): JSX.Element {
  return (
    <>
      {catalogFilms.map((film) => (
        <FilmCard key={film.id} film={film}/>
      ))}
    </>
  );
}

export default Filmlist;
