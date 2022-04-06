import { createSlice } from '@reduxjs/toolkit';

import { NameSpace, ALL_GENRES } from '../../consts';
import { FilmsProcess } from '../../types/state';

const initialState: FilmsProcess = {
  genreCurrent: ALL_GENRES,
};

export const filmsProcess = createSlice({
  name: NameSpace.films,
  initialState,
  reducers: {
    chooseGenre: (state, action) => {
      state.genreCurrent = action.payload;
    },
  },
});

export const { chooseGenre } = filmsProcess.actions;
