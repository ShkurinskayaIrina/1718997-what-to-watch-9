import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppRoute } from '../../consts';
import {useAppSelector} from '../../hooks';
import { isCheckedAuth } from '../../films';

import MainPage from '../../pages/main-page';
import AddReviewPage from '../../pages/add-review-page';
import FilmPage from '../../pages/film-page';
import MyListPage from '../../pages/my-list-page';
import PlayerPage from '../../pages/player-page';
import SignInPage from '../../pages/sign-in-page';

import NotFoundPage from '../not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import Preloader from '../preloader/preloader';

import HistoryRouter from '../../components/history-route/history-route';

import browserHistory from '../../browser-history';

import { store } from '../../store/index';
import { fetchCatalog, fetchPromo,  checkAuthAction } from '../../store/api-actions';

function App(): JSX.Element {
  const { authorizationStatus } = useAppSelector(({USER}) => USER);
  const { isDataLoaded } = useAppSelector(({DATA}) => DATA);

  useEffect(() => {
    store.dispatch(fetchCatalog());
    store.dispatch(fetchPromo());
    store.dispatch(checkAuthAction());
  }, []);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Preloader />
    );
  }

  return (
    <>
      <ToastContainer />
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.MainPage }
            element={<MainPage />}
          />
          <Route
            path={AppRoute.SignInPage}
            element={<SignInPage />}
          />
          <Route
            path={AppRoute.MyListPage}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.FilmPage}
            element={<FilmPage />}
          />
          <Route
            path={AppRoute.AddReviewPage}
            element={<AddReviewPage />}
          />
          <Route
            path={AppRoute.PlayerPage}
            element={<PlayerPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </>
  );
}

export default App;
