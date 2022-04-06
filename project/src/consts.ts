import { RatingRangeProps } from './types/films';
import { UserData } from './types/user-data';

export const ALL_GENRES = 'All genres';

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

export enum NameSpace {
  data = 'DATA',
  films = 'FILMS',
  user = 'USER',
}

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

