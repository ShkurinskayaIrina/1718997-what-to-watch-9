import { RatingRangeProps } from './types/films';

export enum AppRoute {
    MainPage = '/',
    SignInPage = '/login',
    MyListPage = '/mylist',
    FilmPage = '/films/:id',
    // FilmDetailsPage = '/films/:id/details',
    // FilmReviewsPage = '/films/:id/reviews',
    AddReviewPage = '/films/:id/review',
    PlayerPage = '/player/:id',
  }

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const genres = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

export const filmTabs = [
  'Overview',
  'Details',
  'Reviews',
];

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
