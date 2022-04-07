import { store } from '../store/index.js';

import { AuthorizationStatus } from '../consts';

import { Catalog, Film, Comment } from '../types/films';
import { UserData } from '../types/user-data';

export type FilmsData = {
  catalog: Catalog,
  promo: Film,
  filmCurrent: Film,
  similarFilms: Catalog,
  favoriteFilms: Catalog,
  comments: Comment[],
  isDataLoaded: boolean,
};

export type FilmsProcess = {
  genreCurrent: string,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userData: UserData,
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
