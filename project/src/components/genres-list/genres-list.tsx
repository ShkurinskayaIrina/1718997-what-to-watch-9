import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { chooseGenre } from '../../store/action';

type Props = {
  genresList: string[],
  genreCurrent: string,
};

function GenresList({genresList, genreCurrent}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre, index) => {
        const keyValue = `genre-${index}`;
        return (
          <li key={keyValue}
            className = {`catalog__genres-item ${genre === genreCurrent ? 'catalog__genres-item--active' : ''}`}
            onClick = {() => {dispatch(chooseGenre(genre));}}
          >
            <Link to="/" className="catalog__genres-link">{genre}</Link>
          </li>);
      })}
    </ul>
  );
}

export default GenresList;
