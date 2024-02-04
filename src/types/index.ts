export interface IComics {
  id: number;
  title: string;
  prices: Array<{ price: string }>;
  thumbnail: { path: string; extension: string };
  description: string;
}
export interface IStateComics {
  comics: IComics[];
  favorites: IComics[];
  purchases: IComics[];
  isLoading: boolean;
  error: boolean;
}
