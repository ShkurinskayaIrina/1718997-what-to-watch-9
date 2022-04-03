import { createReducer } from '@reduxjs/toolkit';

import { chooseGenre, loadCatalog, loadFilm, loadComments, loadSimilarFilms } from './action';
import { loadPromo, requireAuthorization, setError, fetchUserData } from './action';

import { Catalog, Film, Comment } from '../types/films';
import { UserData } from '../types/user-data';

import { ALL_GENRES, AuthorizationStatus, unknownUserData } from '../consts';

type Props = {
  catalog: Catalog,
  promo: Film,
  filmCurrent: Film,
  similarFilms: Catalog,
  comments: Comment[],
  genreCurrent: string,
  authorizationStatus: AuthorizationStatus,
  userData: UserData,
  error: string,
  isDataLoaded: boolean,
}

const initialState: Props = {
  catalog: [],
  promo: {} as Film,
  filmCurrent: {} as Film,
  similarFilms: [],
  comments: [],
  genreCurrent: ALL_GENRES,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: unknownUserData,
  error: '',
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCatalog, (state, action) => {
      state.catalog = action.payload;
      state.genreCurrent = ALL_GENRES;
      state.isDataLoaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.filmCurrent = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(chooseGenre, (state, action) => {
      state.genreCurrent = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(fetchUserData,(state, action) =>{
      state.userData = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

