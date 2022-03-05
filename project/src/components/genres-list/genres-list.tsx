import { Link } from 'react-router-dom';

import { Genre } from '../../types/films';

function GenresList({name}:Genre): JSX.Element {
  return (
    <li className="catalog__genres-item">
      <Link to="/mylist" className="catalog__genres-link">{name}</Link>
    </li>
  );
}

export default GenresList;
