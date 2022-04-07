import { AuthorizationStatus } from './consts';
import { Catalog } from './types/films';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const searchFilm = (catalog: Catalog, filmId:number) =>
  catalog.find((film) => film.id === filmId);

