import { AuthSlice } from "./AuthSlice";
import { AppDispatch } from "../../store";

export const login =
  (username: string, password: string) => (dispatch: AppDispatch) => {
    try {
      if (
        username === process.env.REACT_APP_USERNAME &&
        password === process.env.REACT_APP_PASSWORD
      ) {
        dispatch(AuthSlice.actions.loginSuccess());
      } else {
        dispatch(AuthSlice.actions.setError("Invalid username or password"));
      }
    } catch (error) {
      dispatch(
        AuthSlice.actions.setError("An error occurred while logging in")
      );
    }
  };

export const resetError = () => (dispatch: AppDispatch) => {
  dispatch(AuthSlice.actions.resetError());
};

export const logout = () => (dispatch: AppDispatch) => {
  dispatch(AuthSlice.actions.logout());
};
