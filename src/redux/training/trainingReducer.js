import { createReducer, combineReducers } from '@reduxjs/toolkit';
import trainingActions from './trainingActions';
import { fetchBooks } from '../books/books-operations';

const {
  getCurrTraining,
  startTraining,
  addResult,
  addBook,
  addDate,
  deleteBook,
} = trainingActions;

const initialState = {
  isStarted: false,
  startDate: '',
  endDate: '',
  books: [],
  booksRequest: [],
  totalPages: null,
  readedPages: null,
  statistics: [],
  isGoing: [],
};

const trainingReducer = createReducer(initialState, {
  [fetchBooks.fulfilled]: (state, { payload }) => ({
    ...state,
    isGoing: [
      ...payload.books.going.map(book => ({
        label: book.title,
        value: {
          id: book._id,
          pages: book.pages,
          title: book.title,
          author: book.author,
          year: book.year,
        },
      })),
    ],
  }),
  [addBook]: (state, { payload }) => ({
    ...state,
    booksRequest: state.books.some(book => book.id === payload.book.id)
      ? [...state.books]
      : [...state.books, { id: payload.book.id }],
    books: state.books.some(book => book.id === payload.book.id)
      ? [...state.books]
      : [...state.books, { ...payload.book }],
    isGoing: [
      ...state.isGoing.filter(book => book.value.id !== payload.book.id),
    ],
  }),
  [deleteBook]: (state, { payload }) => ({
    ...state,
    books: [...state.books.filter(book => book.id !== payload.book.id)],
    booksRequest: [
      ...state.booksRequest.filter(book => book.id !== payload.book.id),
    ],
    isGoing: state.isGoing.some(book => book.id === payload.book.id)
      ? [...state.isGoing]
      : [
          ...state.isGoing,
          { label: payload.book.title, value: { ...payload.book } },
        ],
  }),

  [addDate]: (state, { payload }) => ({
    ...state,
    startDate: payload.startDate,
    endDate: payload.endDate,
  }),
  // [startTraining.fulfilled]: (state, { payload }) => ({
  //   ...state,
  //   isStarted: payload?.training.status === 'active' ? true : false,
  //   startDate: payload.training.startDate,
  //   endDate: payload.training.endDate,
  //   books: [...payload.training.books],
  //   totalPages: payload.training.totalPages,
  //   readedlPages: payload.training.readedPages,
  //   statistics: [...payload.training.statistics],
  // }),
  [startTraining.fulfilled]: (state, { payload }) =>
    payload?.training?.status === 'active'
      ? {
          ...state,
          isStarted: true,
          startDate: payload.training.startDate,
          endDate: payload.training.endDate,
          books: [
            ...payload.training.books.map(book => ({ ...book, id: book._id })),
          ],
          totalPages: payload.training.totalPages,
          readedPages: payload.training.readedPages,
          statistics: [...payload.training.statistics],
        }
      : { ...state },
  [getCurrTraining.fulfilled]: (state, { payload }) =>
    payload?.training?.status === 'active'
      ? {
          ...state,
          isStarted: true,
          startDate: payload.training.startDate,
          endDate: payload.training.endDate,
          books: [
            ...payload.training.books.map(book => ({ ...book, id: book._id })),
          ],
          totalPages: payload.training.totalPages,
          readedPages: payload.training.readedPages,
          statistics: [...payload.training.statistics],
        }
      : { ...state },
  // .map(book => ({ ...book, id: book._id }))
  [addResult.fulfilled]: (state, { payload }) =>
    payload?.training?.status === 'active'
      ? {
          ...state,
          isStarted: true,
          startDate: payload.training.startDate,
          endDate: payload.training.endDate,
          books: [...payload.training.books],
          totalPages: payload.training.totalPages,
          readedPages: payload.training.readedPages,
          statistics: [...payload.training.statistics],
        }
      : { ...state },
});

export default trainingReducer;
