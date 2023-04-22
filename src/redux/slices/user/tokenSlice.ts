import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    authorized: '',
  },
  reducers: {
    toggleAuthorized: (state, action) => {
      state.authorized = action.payload;
      console.log(state.authorized);
    },
  },
});

export const { toggleAuthorized } = tokenSlice.actions;

export default tokenSlice.reducer;