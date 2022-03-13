import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import { Film } from '../../types/films';

import MainPage from '../../pages/main-page';
import AddReviewPage from '../../pages/add-review-page';
import FilmPage from '../../pages/film-page';
import MyListPage from '../../pages/my-list-page';
import PlayerPage from '../../pages/player-page';
import SignInPage from '../../pages/sign-in-page';

import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  promoFilm: Film;
  genresFilm: string[];
  catalogFilms: Film[];
};

function App({promoFilm, genresFilm, catalogFilms}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.MainPage }
          element={<MainPage promoFilm={promoFilm} genresFilm={genresFilm} catalogFilms={catalogFilms} />}
        />
        <Route
          path={AppRoute.SignInPage}
          element={<SignInPage />}
        />
        <Route
          path={AppRoute.MyListPage}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListPage catalogFilms={catalogFilms}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.FilmPage}
          element={<FilmPage />}
        />
        <Route
          path={AppRoute.AddReviewPage}
          element={
            <AddReviewPage
              onAddReview={() => {
                throw new Error('Function \'onAddReview\' isn\'t implemented.');
              }}
            />
          }
        />
        <Route
          path={AppRoute.PlayerPage}
          element={<PlayerPage film={promoFilm}/>}
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
