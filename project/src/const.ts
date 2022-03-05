export enum AppRoute {
    MainPage = '/',
    SignInPage = '/login',
    MyListPage = '/mylist',
    FilmPage = '/films/:id',
    FilmDetailsPage = '/films/:id/details',
    FilmReviewsPage = '/films/:id/reviews',
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

