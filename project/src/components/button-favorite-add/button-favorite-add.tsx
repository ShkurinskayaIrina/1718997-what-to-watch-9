import { FavoriteStatus } from '../../types/films';
import { useAppDispatch } from '../../hooks';
import { addFavoriteAction } from '../../store/api-actions';

type Props = {
  id: number,
  isFavorite: number,
  isPromo: number,
}
function ButtonFavoriteAdd({id, isFavorite, isPromo }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  const onClick = (favorit: FavoriteStatus) => {
    dispatch(addFavoriteAction(favorit));
  };

  const handleClick = () => {
    onClick({
      filmId: id,
      status: Number(!isFavorite),
      isPromo: isPromo,
    });
  };

  return (
    <button  onClick={handleClick} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
    </button>
  );
}

export default ButtonFavoriteAdd;
