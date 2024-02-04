import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ComicsReducer from "./reducers/comics/ComicsSlice";
import AuthReducer from "./reducers/auth/AuthSlice";

const rootReducer = combineReducers({
  ComicsReducer,
  AuthReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type rootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
