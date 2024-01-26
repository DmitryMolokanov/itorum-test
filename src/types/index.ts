export interface IComics {
  id: number;
  title: string;
  prices: Array<{ price: string }>;
  thumbnail: { path: string; extension: string };
  description: string;
  bought: boolean;
  favorites: boolean;
}
export interface IStateComics {
  comics: Array<IComics>;
  isLoading: boolean;
  error: boolean;
}
