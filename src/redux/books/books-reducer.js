import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addBooks, fetchBooks } from './books-operations';

const items = createReducer([], {
  [fetchBooks.fulfilled]: (_, { payload }) => payload.books,
  [addBooks.fulfilled]: (state, { payload }) => [...state, payload],
});

const loading = createReducer(false, {
  [addBooks.pending]: () => true,
  [addBooks.fulfilled]: () => false,
  [addBooks.rejected]: () => false,
  [fetchBooks.pending]: () => true,
  [fetchBooks.fulfilled]: () => false,
  [fetchBooks.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchBooks.rejected]: (_, { action }) => action.payload,
  [fetchBooks.pending]: () => null,
  [addBooks.rejected]: (_, action) => action.payload,
  [addBooks.pending]: () => null,
});

export default combineReducers({
  items,
  loading,
  error,
});
