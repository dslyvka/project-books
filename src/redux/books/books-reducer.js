import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addBooks, fetchBooks, reviewBook } from './books-operations';

const items = createReducer(
  {},
  {
    [fetchBooks.fulfilled]: (_, { payload = '' }) => payload.books,
    [addBooks.fulfilled]: (state, { payload }) => ({ ...state, payload }),
    [reviewBook.fulfilled]: (state, { payload }) => ({ ...state, payload }),
  },
);

const loading = createReducer(false, {
  [addBooks.pending]: () => true,
  [addBooks.fulfilled]: () => false,
  [addBooks.rejected]: () => false,
  [fetchBooks.pending]: () => true,
  [fetchBooks.fulfilled]: () => false,
  [fetchBooks.rejected]: () => false,
  [reviewBook.pending]: () => true,
  [reviewBook.fulfilled]: () => false,
  [reviewBook.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchBooks.rejected]: (_, { action }) => action.payload,
  [fetchBooks.pending]: () => null,
  [addBooks.rejected]: (_, action) => action.payload,
  [addBooks.pending]: () => null,
  [reviewBook.pending]: () => null,
  [reviewBook.rejected]: (_, { action }) => action.payload,
});

export default combineReducers({
  items,
  loading,
  error,
});
