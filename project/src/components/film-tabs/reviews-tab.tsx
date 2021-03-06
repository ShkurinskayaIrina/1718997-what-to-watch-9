import { Comment } from '../../types/films';
import  dayjs from 'dayjs';

type Props = {
  reviews: Comment[];
}

function ReviewsTab({reviews}:Props): JSX.Element {

  const formattingDateMDY = (date: string) => dayjs(date).format('MMMM DD, YYYY');

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map(({ id, comment, user, date, rating }) => (
          <div className="review" key={id}>
            <blockquote className="review__quote">
              <p className="review__text">{comment}</p>

              <footer className="review__details">
                <cite className="review__author">{user.name}</cite>
                <time className="review__date" dateTime={date}>{formattingDateMDY(date)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsTab;
