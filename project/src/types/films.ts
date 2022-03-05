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

export type Genre = {
  name: string;
}

export type Comment = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: {
    id: number;
    name: string;
  }
}
