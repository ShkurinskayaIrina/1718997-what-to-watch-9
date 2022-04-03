import { FilmProps } from '../../types/films';

function DetailsTab({film}:FilmProps):JSX.Element {

  const { director, starring, runTime, genre, released } = film;

  const getRunTimeHM = (runTimeM:number):string => {
    const hInHover = 60;
    if (runTimeM<hInHover) {
      return `${runTimeM}m`;
    }

    if (runTimeM % hInHover===0) {
      return `${runTimeM / hInHover}h`;
    }

    return  `${Math.floor(runTimeM/hInHover)}h ${runTimeM % hInHover}h`;
  };

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {starring.join(', ')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getRunTimeHM(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default DetailsTab;
