import {createAction} from '@reduxjs/toolkit';

export const chooseGenre = createAction<string>('films/chooseGenre');

export const showMoreFilms = createAction('films/showMoreFilms');
