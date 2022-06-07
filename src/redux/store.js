import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import booksReducer from './books/books-reducer';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;
