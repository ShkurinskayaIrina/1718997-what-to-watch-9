import { useParams, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../hooks';

import { searchFilm } from '../films';

function PlayerPage(): JSX.Element {
  const {id} = useParams();
  const { catalog } = useAppSelector(({DATA}) => DATA);

  const filmFind = searchFilm(catalog, Number(id));
  const { videoLink, posterImage } = {...filmFind};

  const navigate = useNavigate();

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={posterImage} controls></video>

      <button type="button" onClick={() => navigate(`/films/${id}`)} className="player__exit">Exit</button>

    </div>
  );
}

export default PlayerPage;
