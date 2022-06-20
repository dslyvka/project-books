import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-books-api.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getCurrTraining = createAsyncThunk(
  'training/getCurrTraining',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/trainings');
      // console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

const startTraining = createAsyncThunk(
  'training/startTraining',
  async (details, thunkAPI) => {
    try {
      // console.log(details);
      const { startDate, endDate } = details;
      const books = details.books;
      const { data } = await axios.post('/trainings', {
        startDate,
        endDate,
        books,
      });
      // console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

const addResult = createAsyncThunk(
  'training/addResult',
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.patch('/trainings', body);
      // console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
);

const addBook = createAction('training/addBook', ({ book }) => {
  return {
    payload: { book },
  };
});

const addDate = createAction('training/addDate', ({ startDate, endDate }) => {
  return {
    payload: { startDate, endDate },
  };
});

const deleteBook = createAction(
  'training/deleteBook',
  ({ author, pages, year, title, id }) => {
    return {
      payload: { book: { author, pages, year, title, id } },
    };
  },
);

const trainingActions = {
  getCurrTraining,
  addResult,
  startTraining,
  addBook,
  addDate,
  deleteBook,
};

export default trainingActions;
