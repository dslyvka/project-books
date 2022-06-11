import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-books-api.herokuapp.com/api';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, rejectWithValue) => {
    try {
      const { data } = await axios.get('/books');

      return data;
    } catch (error) {
      return rejectWithValue(alert(error.message));
    }
  },
);

export const addBooks = createAsyncThunk('/books/addBooks', async text => {
  const books = {
    title: text.title,
    autor: text.author,
    year: text.year,
    pages: text.pages,
  };
  const { data } = await axios.post('/books', books);
  return data;
});
