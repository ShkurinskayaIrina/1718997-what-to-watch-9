import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import {PromoFilm, Film} from '../../types/films';

import MainPage from '../main-page/main-page';
import AddReviewPage from '../add-review-page/add-review-page';
import FilmDetailsPage from '../film-details-page/film-details-page';
import FilmPage from '../film-page/film-page';
import FilmPageReviews from '../film-page-reviews/film-page-reviews';
import MyListPage from '../my-list-page/my-list-page';
import PlayerPage from '../player-page/player-page';
import SignInPage from '../sign-in-page/sign-in-page';
import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  promoFilm: PromoFilm,
  genresFilm: string[],
  catalogFilms: Film[],
};

function App({promoFilm, genresFilm, catalogFilms}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage promoFilm={promoFilm} genresFilm={genresFilm} catalogFilms={catalogFilms} />}
        />
        <Route
          path={AppRoute.Login}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPage />}
        />
        <Route
          path={AppRoute.FilmDetails}
          element={<FilmDetailsPage />}
        />
        <Route
          path={AppRoute.FilmPageReviews}
          element={<FilmPageReviews />}
        />
        <Route
          path={AppRoute.Review}
          element={<AddReviewPage />}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
