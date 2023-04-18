import { createSlice } from "@reduxjs/toolkit";
import { newuserState } from "./interface";

const initialState: newuserState = {
  createdUser: null,
  loading: false,
  error: false,
}

export const newuserSlice = createSlice({
  name: 'newuser',
  initialState,
  reducers: {
    signupStart: (state) => {
      state.loading = true;
    },
    signupSucess: (state, action) => {
      state.loading = false;
      state.createdUser = action.payload;
    },
    signupFailure: (state) => {
      state.loading = false;
      state.error = true;
    }
  }
})

export const { signupFailure, signupStart, signupSucess } = newuserSlice.actions;

export default newuserSlice.reducer;