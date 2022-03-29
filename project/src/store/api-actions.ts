import { createAsyncThunk } from '@reduxjs/toolkit';

import { api, store } from './index';

import { saveToken, dropToken } from '../services/token';
import { errorHandle } from '../services/error-handle';

import { loadCatalog, loadFilm, loadComments, loadPromo, loadSimilarFilms } from './action';
import { requireAuthorization, setError, redirectToRoute } from './action';

import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute } from '../consts';

import { Catalog, Film, Comments } from '../types/films';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

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
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
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
    } catch (error) {
      errorHandle(error);
    }
  },
);
