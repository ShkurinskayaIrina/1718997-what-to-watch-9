import { Link, useParams } from 'react-router-dom';
import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import Logo from '../components/logo/logo';

import { catalog } from '../mocks/data';

type Props = {
  onAddReview: (rating: number, reviewText: string) => void;
}

function AddReviewPage({onAddReview}:Props): JSX.Element {
  const {id: idParams} = useParams();

  const film = catalog.find(({id}) => id.toString() === idParams);

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(8);
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo classLogo="logo__link"/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film?.id}`} className="breadcrumbs__link">{film?.name} </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${film?.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to="/login" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form"
          onSubmit={(evt: FormEvent<HTMLFormElement>) => {
            evt.preventDefault();
            onAddReview(rating, comment);
          }}
        >
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
    </section>
  );
}

export default AddReviewPage;
