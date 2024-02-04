import { createSlice } from "@reduxjs/toolkit";
import { IStateComics } from "../../../types";

export const initialState: IStateComics = {
  comics: [],
  favorites: [],
  purchases: [],
  isLoading: false,
  error: false,
};

export const ComicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    ComicsCreators(state) {
      state.isLoading = true;
    },
    ComicsCreatorsSuccess(state, action) {
      state.isLoading = false;
      state.comics = action.payload;
    },
    ComicsCreatorsError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    buyComic(state, action) {
      const comic = state.comics.find((el) => el.id === action.payload);
      if (comic) state.purchases.push(comic);
    },
    addFavorites(state, action) {
      const comic = state.comics.find((el) => el.id === action.payload);
      if (comic) state.favorites.push(comic);
    },
    removeFavorites(state, action) {
      const comic = state.favorites.filter((el) => el.id !== action.payload);
      state.favorites = comic;
    },
  },
});
export default ComicsSlice.reducer;
