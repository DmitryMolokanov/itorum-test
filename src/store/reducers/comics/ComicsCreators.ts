import { AppDispatch } from "../../store";
import { publicKey, timestamp, hash } from "../../../config/config";
import { ComicsSlice } from "./ComicsSlice";
import { IComics } from "../../../types";

export const ComicsCreators = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(ComicsSlice.actions.ComicsCreators());

    const url = `https://gateway.marvel.com/v1/public/comics?limit=100&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
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
      };
      sortComicsValue.id = el.id;
      sortComicsValue.title = el.title;
      sortComicsValue.prices = el.prices;
      sortComicsValue.thumbnail = el.thumbnail;
      sortComicsValue.description = el.description;
      comicsCollection.push(sortComicsValue);
    });
    dispatch(ComicsSlice.actions.ComicsCreatorsSuccess(comicsCollection));
  } catch (e) {
    dispatch(ComicsSlice.actions.ComicsCreatorsError(true));
  }
};

export const buyComic = (id: number) => (dispatch: AppDispatch) => {
  dispatch(ComicsSlice.actions.buyComic(id));
};
export const addFavorites = (id: number) => (dispatch: AppDispatch) => {
  dispatch(ComicsSlice.actions.addFavorites(id));
};

export const removeFavorites = (id: number) => (dispatch: AppDispatch) => {
  dispatch(ComicsSlice.actions.removeFavorites(id));
};
