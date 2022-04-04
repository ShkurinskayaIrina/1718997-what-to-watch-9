import { RatingRangeProps } from './types/films';
import { UserData } from './types/user-data';

export const FILM_COUNT_PER_STEP = 8;

export const SIMILAR_FILM_COUNT = 4;

export const TIMEOUT_LAG_PLAYER = 1000;

export const TIMEOUT_SHOW_ERROR = 2000;

export const ALL_GENRES = 'All genres';

export const MAX_GENRES_COUNT = 9;

export enum AppRoute {
    MainPage = '/',
    SignInPage = '/login',
    MyListPage = '/mylist',
    FilmPage = '/films/:id',
    AddReviewPage = '/films/:id/review',
    PlayerPage = '/player/:id',
  }

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Comments = '/comments',
  Promo = '/promo',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const filmTabs = [
  'Overview',
  'Details',
  'Reviews',
];

export const ErrorMessages = {
  EMAIL: 'Введите корректный email!',
  PASSWORD: 'Пароль должен состоять минимум из одной буквы и цифры! Пробелы запрещены!',
};

export const ratingRange: RatingRangeProps = {
  'bad': {
    from: 0,
    to: 3,
  },
  'normal': {
    from: 3,
    to: 5,
  },
  'good': {
    from: 5,
    to: 8,
  },
  'very good': {
    from: 8,
    to:10,
  },
  'awesome': {
    from:10,
    to:100,
  },
};

export const unknownUserData:UserData = {
  avatarUrl: 'img/avatar.jpg',
  name: 'User avatar',
};
