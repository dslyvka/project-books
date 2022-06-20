import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-books-api.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/books');

      return data;
    } catch (error) {
      return console.log(error.message);
    }
  },
);

export const addBooks = createAsyncThunk(
  'books/addBooks',
  async (values, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    const books = {
      title: values.title,
      author: values.author,
      year: values.date,
      pages: values.pages,
    };
    try {
      const { data } = await axios.post('/books', books);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    try {
      axios.delete(`/books/${bookId}`);
      return bookId;
    } catch (error) {
      console.log(error);
    }
  },
);

export const reviewBook = createAsyncThunk(
  'books/review',
  async (values, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    const review = {
      review: values.resume,
      rating: values.rate.toString(),
    };

    try {
      const { data } = await axios.patch(`/books/${values.id}/review`, review);
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
);
