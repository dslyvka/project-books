import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addBooks,
  deleteBook,
  fetchBooks,
  reviewBook,
} from './books-operations';
import {
  changeFilterTitle,
  changeFilterRating,
  chackboxRaview,
} from './books-actions';

const items = createReducer(
  {
    already: [],
    going: [],
    reading: [],
  },
  {
    [fetchBooks.fulfilled]: (state, { payload = '' }) => ({
      ...state,
      already: [...payload.books.already],
      going: [...payload.books.going],
      reading: [...payload.books.reading],
    }),
    [addBooks.fulfilled]: (state, { payload }) => ({
      ...state,
      going: [...state.going, payload.book],
    }),
    [reviewBook.fulfilled]: (state, { payload }) => ({
      ...state,
      already: [
        ...state.already.map(book => {
          if (book._id === payload.book._id) {
            return payload.book;
          }
          return book;
        }),
      ],
    }),

    [deleteBook.fulfilled]: (state, { payload }) => ({
      ...state,
      going: [...state.going.filter(({ _id }) => _id !== payload)],
      // reading: [...state.reading.filter(({ _id }) => _id !== payload)],
      // going: [...state['going'].filter(({ _id }) => _id !== payload)],
    }),
  },
);

const filter = createReducer(
  {
    filterTitle: '',
    filterRating: '',
    chackboxRaview: true,
  },
  {
    [changeFilterTitle]: (state, { payload }) => ({
      ...state,
      filterTitle: payload,
    }),

    [changeFilterRating]: (state, { payload }) => ({
      ...state,
      filterRating: payload,
    }),

    [chackboxRaview]: (state, { payload }) => ({
      ...state,
      chackboxRaview: payload,
    }),
  },
);

// const filterRating = createReducer('', {
//   [changeFilterTitle]: (state, { payload }) => payload,
// });

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
  [deleteBook.pending]: () => true,
  [deleteBook.fulfilled]: () => false,
  [deleteBook.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchBooks.rejected]: (_, { action }) => action.payload,
  [fetchBooks.pending]: () => null,
  [addBooks.rejected]: (_, action) => action.payload,
  [addBooks.pending]: () => null,
  [reviewBook.pending]: () => null,
  [reviewBook.rejected]: (_, { action }) => action.payload,
  [deleteBook.pending]: (_, { action }) => null,
  [deleteBook.rejected]: (_, { action }) => action.payload,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
