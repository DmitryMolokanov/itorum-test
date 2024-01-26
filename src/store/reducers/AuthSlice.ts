import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isAuthenticated: false,
  error: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default AuthSlice.reducer;
