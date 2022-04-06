import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { Film } from '../../types/films';
import { FilmsData } from '../../types/state';


const initialState: FilmsData = {
  catalog: [],
  promo: {} as Film,
  filmCurrent: {} as Film,
  similarFilms: [],
  comments: [],
  isDataLoaded: false,
};

export const filmsData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadCatalog: (state, action) => {
      state.catalog = action.payload;
      state.isDataLoaded = true;
    },
    loadFilm: (state, action) => {
      state.filmCurrent = action.payload;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
    loadPromo: (state, action) => {
      state.promo = action.payload;
    },
  },
});

export const { loadCatalog, loadFilm, loadComments, loadSimilarFilms, loadPromo } = filmsData.actions;
