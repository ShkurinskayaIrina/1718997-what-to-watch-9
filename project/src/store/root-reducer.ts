import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { filmsData } from './films-data/films-data';
import { filmsProcess } from './films-process/films-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.data]: filmsData.reducer,
  [NameSpace.films]:filmsProcess.reducer,
  [NameSpace.user]: userProcess.reducer,
});
