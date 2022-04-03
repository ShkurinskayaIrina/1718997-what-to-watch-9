export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string
  released: number;
  isFavorite: boolean;
}

export type Catalog = Film[];

export type FilmProps = {
  film: Film;
}

export type NewComment = {
  filmId: number,
  comment: string,
  rating: number,
}

export type Comment = NewComment & {
  id: number,
  date: string,
  user: {
    id: number,
    name: string,
  }
}

export type Comments = Comment[];

type Rating = {
  from: number,
  to: number,
}

export type RatingRangeProps = {
  [key: string]: Rating,
};

