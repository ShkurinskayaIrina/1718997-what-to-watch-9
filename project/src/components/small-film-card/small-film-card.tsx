import { useState } from 'react';

import FilmCard from '../film-card/film-card';

import { Film } from '../../types/films';

type Props = {
  catalogFilms: Film[];
};

function SmallFilmCard({catalogFilms}: Props): JSX.Element {
  const [cardActiveFilm, setcardActiveFilm] = useState<Film | null>(null);

  const handlerFilmChange = (filmInfo:Film) => {
    setcardActiveFilm(filmInfo);
  };

  const handlerFilmChangeOut = () => {
    setcardActiveFilm(cardActiveFilm);
  };

  return (
    <>
      {catalogFilms.map((film) => (
        <FilmCard key={film.id} catalogFilm={film}
          onMouseEnterCallback={handlerFilmChange}
          onMouseEnterCallbackOut={handlerFilmChangeOut}
        />))}
    </>
  );
}

export default SmallFilmCard;
