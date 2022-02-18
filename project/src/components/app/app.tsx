import MainPage from '../main-page/main-page';

type FilmDescription = {
  name: string,
  genre: string,
  src: string,
  yearRelease: number,
}

type FilmType = {
  id: number,
  poster: string,
  name: string,
}


type AppProps = {
  promoFilm: FilmDescription,
  genresFilm: string[],
  catalogFilms: FilmType[],
};

function App({promoFilm, genresFilm, catalogFilms}: AppProps): JSX.Element {
  return <MainPage promoFilm={promoFilm} genresFilm={genresFilm} catalogFilms={catalogFilms}/>;
}

export default App;
