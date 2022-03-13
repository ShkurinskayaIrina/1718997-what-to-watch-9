import { ratingRange } from '../../const';
import { FilmProps } from '../../types/films';

function OverviewTab({film}:FilmProps): JSX.Element {

  function getRatingDesctiption(): string {
    let ratingText = '';

    if (film === undefined) {
      return ratingText;
    }

    Object.keys(ratingRange).forEach((key) => {
      if ((film.rating > ratingRange[key].from || film.rating === ratingRange[key].from) &&
      film.rating < ratingRange[key].to) {
        ratingText = key;
      }
    }, ratingRange);

    return ratingText;
  }
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDesctiption()}</span>
          <span className="film-rating__count">{`${film?.scoresCount} ratings`}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film?.description}</p>

        <p className="film-card__director"><strong>{`Director: ${film?.director}`}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film?.starring.join(', ')}</strong></p>
      </div>
    </>


  );
}

export default OverviewTab;
