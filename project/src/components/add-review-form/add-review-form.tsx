import { Fragment, useState, ChangeEvent } from 'react';

function AddReviewForm(): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(8);
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {[...Array(10)].reverse().map((_,id) => {
              const keyValue = 10-id;
              return (
                <Fragment key={keyValue}>
                  <input className="rating__input" id={`star-${keyValue}`} type="radio" name="rating" value={keyValue}
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
          <textarea className="add-review__textarea" name="comment" id="review-text" placeholder="Review text" onChange={(event) => setComment(event.target.value)} value={comment}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;


