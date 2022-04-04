import { createAction } from '@reduxjs/toolkit';

import { Catalog, Film, Comments } from '../types/films';
import { UserData, MaxUserData } from '../types/user-data';

import { AuthorizationStatus } from '../consts';

export const loadCatalog = createAction<Catalog>('films/loadCatalog');

export const loadFilm = createAction<Film>('films/loadFilm');

export const loadComments = createAction<Comments>('films/loadComments');

export const loadSimilarFilms = createAction<Catalog>('films/loadSimilarFilms');

export const loadPromo = createAction<Film>('films/loadPromo');

export const chooseGenre = createAction<string>('films/chooseGenre');

export const showMoreFilms = createAction<number>('films/showMoreFilms');

export const redirectToRoute = createAction<string>('films/redirectToRoute');

export const setError = createAction<string>('films/setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const fetchUserData = createAction<MaxUserData | UserData>('user/fetchUserData');
