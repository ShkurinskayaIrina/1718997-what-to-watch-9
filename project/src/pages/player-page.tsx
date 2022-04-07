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

      {/* <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{runTime}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default PlayerPage;
