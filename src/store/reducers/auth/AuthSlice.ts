import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isAuth: false,
  error: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuth = true;
      state.error = null;
    },
    logout: (state) => {
      state.isAuth = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
  },
});

export default AuthSlice.reducer;
