import { createSlice } from "@reduxjs/toolkit";
import { IStateComics } from "../../types";

export const initialState: IStateComics = {
  comics: [],
  isLoading: false,
  error: false,
};

export const ComicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    getComics(state) {
      state.isLoading = true;
    },
    getComicsSuccess(state, action) {
      state.isLoading = false;
      state.comics = action.payload;
    },
    getComicsError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    buyComic(state, action) {
      const index = state.comics.findIndex((el) => el.id === action.payload);
      state.comics[index].bought = true;
    },
    favoriteComic(state, action) {
      const index = state.comics.findIndex((el) => el.id === action.payload);
      state.comics[index].favorites = true;
    },
    removeFavorites(state, action) {
      const index = state.comics.findIndex((el) => el.id === action.payload);
      state.comics[index].favorites = false;
    },
  },
});
export default ComicsSlice.reducer;
