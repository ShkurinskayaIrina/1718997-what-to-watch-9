import {useState} from 'react';
import { Link } from 'react-router-dom';

import { filmTabs } from '../../consts';

import { Film, Comment } from '../../types/films';

import OverviewTab from '../../components/film-tabs/overview-tab';
import ReviewsTab from '../../components/film-tabs/reviews-tab';
import DetailsTab from '../../components/film-tabs/details-tab';

type Props = {
  film: Film,
  reviews: Comment[],
}
function FilmTabs({ film, reviews }: Props): JSX.Element {

  const activeTabCurrent = 'Overview';

  const [activeTab, setActiveTab] = useState(activeTabCurrent);

  const handleClick = (tab:string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {filmTabs.map((tab) => (
            <li key = {tab}
              className = {`film-nav__item ${activeTab === tab ? 'film-nav__item--active' : ''}`}
              onClick = {() => handleClick(tab)}
            >
              <Link to={'#'} className="film-nav__link">{tab}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === filmTabs[0] && <OverviewTab film={film} />}
      {activeTab === filmTabs[1] && <DetailsTab film={film} />}
      {activeTab === filmTabs[2] && <ReviewsTab reviews={reviews} />}
    </>
  );
}

export default FilmTabs;
