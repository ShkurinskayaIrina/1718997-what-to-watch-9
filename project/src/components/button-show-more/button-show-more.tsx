import { showMoreFilms } from '../../store/action';
import { useAppDispatch } from '../../hooks';

function ButtonShowMore():JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick = {() => {dispatch(showMoreFilms());}}>
          Show more
      </button>
    </div>
  );
}

export default ButtonShowMore;
