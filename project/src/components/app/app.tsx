import MainPage from '../main-page/main-page';
import {PromoFilm, Film} from '../../types/films';

type AppProps = {
  promoFilm: PromoFilm,
  genresFilm: string[],
  catalogFilms: Film[],
};

function App({promoFilm, genresFilm, catalogFilms}: AppProps): JSX.Element {
  return <MainPage promoFilm={promoFilm} genresFilm={genresFilm} catalogFilms={catalogFilms}/>;
}

export default App;
