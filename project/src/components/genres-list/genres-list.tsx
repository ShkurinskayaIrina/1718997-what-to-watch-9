import { Genre } from '../../types/films';

function GenresList({name}:Genre): JSX.Element {
  return (
    <li className="catalog__genres-item">
      <a href="/" className="catalog__genres-link">{name}</a>
    </li>
  );
}

export default GenresList;
