import PromoFilmCard from '../components/promo-film-card/promo-film-card';
import Footer from '../components/footer/footer';
import CatalogFilms from '../components/catalog-films/catalog-films';

import { useAppSelector } from '../hooks/';

function MainPage(): JSX.Element {
  const { catalog, promo } = useAppSelector(({DATA}) => DATA);
  const { genreCurrent } = useAppSelector(({FILMS}) => FILMS);
  const { userData, authorizationStatus } = useAppSelector(({USER}) => USER);

  return (
    <>
      <PromoFilmCard
        promo={promo}
        userData={userData}
        authorizationStatus={authorizationStatus}
      />

      <div className="page-content">
        <CatalogFilms
          catalog={catalog}
          genreCurrent={genreCurrent}
        />
      </div>

      <Footer />
    </>
  );
}

export default MainPage;
