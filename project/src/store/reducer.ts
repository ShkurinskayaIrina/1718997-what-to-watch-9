import { createReducer } from '@reduxjs/toolkit';
import { chooseGenre, showMoreFilms } from './action';

import { ALL_GENRES, FILM_COUNT_PER_STEP } from '../consts';

import { catalog } from '../mocks/data';
const genres = [ALL_GENRES,...new Set( catalog.map((film) => film.genre))];

const initialState = {
  genres: genres,
  genreCurrent: ALL_GENRES,
  filmsByGenre: catalog,
  shownFilmsCount: FILM_COUNT_PER_STEP,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(chooseGenre, (state, action) => {
      state.genreCurrent = action.payload;
      state.filmsByGenre = action.payload===ALL_GENRES ? catalog :catalog.filter(({genre}) => genre === action.payload);
    })
    .addCase(showMoreFilms, (state) => {
      state.shownFilmsCount =  Math.min(state.filmsByGenre.length, state.shownFilmsCount + FILM_COUNT_PER_STEP);
    });
});

