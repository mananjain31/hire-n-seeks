import { configureStore } from '@reduxjs/toolkit';
import alertSlice from './slices/alert-slice';
import userSlice from './slices/user-slice';

export const store = configureStore({
  reducer : {
    user : userSlice.reducer,
    alert : alertSlice.reducer,
  }
});