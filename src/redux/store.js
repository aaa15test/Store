import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice';

const setupStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(),
  })
}

export const store = setupStore();
