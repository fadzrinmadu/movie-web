export interface ILoginType {
  username: string;
  password: string;
}

export interface IMovieType {
  id: number;
  image: string;
  title: string;
  description: string;
  genres: string[];
  rating: number;
  duration: string;
  parentalGuidance: string;
  producers: string[];
}
