import { Fragment, ChangeEvent, FormEvent, useState } from 'react';

import { useAppDispatch } from '../../hooks';

import { NewComment } from '../../types/films';

import {addCommentAction} from '../../store/api-actions';

type Props = {
  id: number,
}

function Review({id}: Props): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const dispatch = useAppDispatch();

  const onSubmit = (commentData: NewComment) => {
    dispatch(addCommentAction(commentData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (comment) {
      onSubmit({
        filmId: id,
        comment: comment,
        rating: rating,
      });
    }
  };

  return (
    <form action="#" className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {[...Array(10)].reverse().map((_,index) => {
            const keyValue = 10-index;
            return (
              <Fragment key={keyValue}>
                <input className="rating__input"
                  id={`star-${keyValue}`}
                  type="radio"
                  name="rating"
                  value={keyValue}
                  defaultChecked={keyValue===rating}
                  onChange={({target}: ChangeEvent<HTMLInputElement>) => { setRating(Number(target.value));}}
                />
                <label className="rating__label" htmlFor={`star-${keyValue}`}>{keyValue}</label>
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="comment" id="review-text"
          placeholder="Review text"
          onChange={(event) => setComment(event.target.value)}
          value={comment}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={(!comment || rating===0)}
          >Post
          </button>
        </div>

      </div>
    </form>
  );
}

export default Review;
