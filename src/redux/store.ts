import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import themeSlice from './slices/settings/settingSlice';
import tokenSlice from './slices/user/tokenSlice';

const rootReducer = combineReducers({
  settings: themeSlice,
  user: tokenSlice,
  // outros reducers aqui
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
