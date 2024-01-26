import { AppDispatch } from "../store";
import { publicKey, timestamp, hash } from "../../config/config";
import { ComicsSlice } from "./ComicsSlice";
import { IComics } from "../../types";

export const getComics = () => async (dispatch: AppDispatch) => {
  const jsonStorage = JSON.parse(localStorage.getItem("persist:root")!);
  const storage = JSON.parse(jsonStorage.ComicsReducer);
  console.log(storage.comics);

  try {
    dispatch(ComicsSlice.actions.getComics());

    const url = `https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    const response = await fetch(url);
    const result = await response.json();

    const comicsCollection: Array<IComics> = [];
    result.data.results.forEach((el: IComics) => {
      let sortComicsValue: IComics = {
        id: 0,
        title: "",
        prices: [{ price: "" }],
        thumbnail: { path: "", extension: "" },
        description: "",
        bought: false,
        favorites: false,
      };
      storage.comics.find((item: IComics) => {
        if (item.id === el.id) {
          sortComicsValue.bought = item.bought || false;
          sortComicsValue.favorites = item.favorites || false;
        }
      });
      sortComicsValue.id = el.id;
      sortComicsValue.title = el.title;
      sortComicsValue.prices = el.prices;
      sortComicsValue.thumbnail = el.thumbnail;
      sortComicsValue.description = el.description;
      comicsCollection.push(sortComicsValue);
    });

    dispatch(ComicsSlice.actions.getComicsSuccess(comicsCollection));
  } catch (e) {
    dispatch(ComicsSlice.actions.getComicsError(true));
  }
};

export const buyComic = (id: number) => (dispatch: AppDispatch) => {
  dispatch(ComicsSlice.actions.buyComic(id));
};
export const favoriteComic = (id: number) => (dispatch: AppDispatch) => {
  dispatch(ComicsSlice.actions.favoriteComic(id));
};

export const removeFavorites = (id: number) => (dispatch: AppDispatch) => {
  dispatch(ComicsSlice.actions.removeFavorites(id));
};
