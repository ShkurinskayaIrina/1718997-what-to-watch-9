import { createReducer } from '@reduxjs/toolkit';
import { chooseGenre, loadCatalog, loadFilm, loadComments, loadSimilarFilms} from './action';
import { loadPromo, showMoreFilms, requireAuthorization, setError } from './action';
import { Catalog, Film, Comment } from '../types/films';
import { ALL_GENRES, FILM_COUNT_PER_STEP, AuthorizationStatus } from '../consts';

type Props = {
  catalog: Catalog,
  promo: Film,
  filmCurrent: Film,
  similarFilms: Catalog,
  comments: Comment[],
  genres: string[],
  genreCurrent: string,
  filmsByGenre: Catalog,
  shownFilmsCount: number,
  authorizationStatus: AuthorizationStatus,
  error: string,
  isDataLoaded: boolean,
}

const initialState: Props = {
  catalog: [],
  promo: {} as Film,
  filmCurrent: {} as Film,
  similarFilms: [],
  comments: [],
  genres: [],
  genreCurrent: ALL_GENRES,
  filmsByGenre: [],
  shownFilmsCount: FILM_COUNT_PER_STEP,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCatalog, (state, action) => {
      state.catalog = action.payload;
      state.filmsByGenre = action.payload;
      state.genreCurrent = ALL_GENRES;
      state.genres = [ALL_GENRES,...new Set( action.payload.map((film) => film.genre))];
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
      const catalog = state.catalog;
      state.genreCurrent = action.payload;
      state.filmsByGenre = action.payload===ALL_GENRES ? catalog :catalog.filter(({genre}) => genre === action.payload);
    })
    .addCase(showMoreFilms, (state) => {
      state.shownFilmsCount =  Math.min(state.filmsByGenre.length, state.shownFilmsCount + FILM_COUNT_PER_STEP);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

