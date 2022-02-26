export enum AppRoute {
    Login = '/login', //SignInPage
    Root = '/', // MainPage
    MyList = '/mylist', // MyListPage
    Film = '/films/:id',// FilmPage
    FilmDetails = '/films/:id/details',// FilmDetailsPage ?
    FilmPageReviews = '/films/:id/review',// FilmPageReviews ?
    Review = '/films/:id/review', // AddReviewPage
    Player = '/player/:id', // PlayerPage
  }

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
