import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FilmProps } from '../../types/films';

import VideoPlayer from '../../components/video-player/video-player';

function FilmCard( {film}: FilmProps): JSX.Element {

  const { id, posterImage, name } = film;

  const [activePlayer, setActivePlayer] = useState<number | null>(null);

  const msInSecond = 1000;

  let timer: ReturnType<typeof setTimeout> | null = null;

  const handleMouseEnter = () => {
    timer = setTimeout(() => setActivePlayer(activePlayer === film.id ? -1 : film.id), msInSecond);
  };

  const handleMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setActivePlayer(null);
  };

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <VideoPlayer isPlaying = {film.id === activePlayer} film = {film} />
        {<img src={posterImage} alt={name} width='280' height='175' />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
