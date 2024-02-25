import { configureStore } from '@reduxjs/toolkit';
import loginFormSlice from './slices/loginFormSlice';

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    loginFormSlice: loginFormSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
