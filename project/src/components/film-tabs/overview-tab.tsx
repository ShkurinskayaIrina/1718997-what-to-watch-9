import { ratingRange } from '../../consts';
import { FilmProps } from '../../types/films';

function OverviewTab({film}:FilmProps): JSX.Element {

  const { scoresCount, rating, director, starring, description } = film;

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
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDesctiption()}</span>
          <span className="film-rating__count">${scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: ${director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring?.join(', ')}</strong></p>
      </div>
    </>


  );
}

export default OverviewTab;
