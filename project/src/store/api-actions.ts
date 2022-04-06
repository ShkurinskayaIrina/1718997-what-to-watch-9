import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from './index';

import { dropToken, saveToken } from '../services/token';
import { errorHandle } from '../services/error-handle';

import { setError, redirectToRoute } from './action';
import { requireAuthorization, fetchUserData } from './user-process/user-process';

import { loadCatalog, loadFilm, loadComments, loadPromo, loadSimilarFilms } from './films-data/films-data';
import { APIRoute, AuthorizationStatus, AppRoute, unknownUserData } from '../consts';

import { Catalog, Film, Comments, NewComment } from '../types/films';
import { AuthData } from '../types/auth-data';
import { MaxUserData } from '../types/user-data';

const TIMEOUT_SHOW_ERROR = 2000;

export const clearErrorAction = createAsyncThunk(
  'films/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchCatalog = createAsyncThunk(
  'films/fetchCatalog',
  async () => {
    try {
      const {data} = await api.get<Catalog>(APIRoute.Films);
      store.dispatch(loadCatalog(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFilm = createAsyncThunk(
  'films/fetchFilm',
  async (filmId: number) => {
    try {
      const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
      store.dispatch(loadFilm(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchComments = createAsyncThunk(
  'films/fetchComments',
  async (filmId: number) => {
    try {
      const {data} = await api.get<Comments>(`${APIRoute.Comments}/${filmId}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchSimilarFilms = createAsyncThunk(
  'films/fetchSimilarFilms',
  async (filmId: number) => {
    try {
      const {data} = await api.get<Catalog>(`${APIRoute.Films}/${filmId}/similar`);
      store.dispatch(loadSimilarFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchPromo = createAsyncThunk(
  'films/fetchPromo',
  async () => {
    try {
      const {data} = await api.get<Film>(APIRoute.Promo);
      store.dispatch(loadPromo(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(fetchUserData(data));
    } catch(error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({email, password}: AuthData) => {
    try {
      const {data: userData} = await api.post<MaxUserData>(APIRoute.Login, {email, password});
      saveToken(userData.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(fetchUserData(userData));
      store.dispatch(redirectToRoute(AppRoute.MainPage));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);


export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(fetchUserData(unknownUserData));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const addCommentAction = createAsyncThunk(
  'film/newComment',
  async ({comment, rating, filmId}: NewComment) => {
    try {
      const { data } = await api.post<Comments>(`comments/${filmId}`, {comment, rating});
      store.dispatch(loadComments(data));
      store.dispatch(redirectToRoute(`/films/${filmId}`));
    } catch (error) {
      errorHandle(error);
    }
  },
);
