import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import shorterLinksSlice from './slice/shorterLinksSlice';

export const store = configureStore({
  reducer: {
    shorterLinks: shorterLinksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

console.log(configureStore);
