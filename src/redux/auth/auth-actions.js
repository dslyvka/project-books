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

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    // console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

const loginG = createAction('auth/loginG', ({ name, email, token }) => {
  return {
    payload: { token, user: { name, email } },
  };
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      window.localStorage.removeItem('token');
      thunkAPI.rejectWithValue(error);
    }
  },
);

const actions = {
  register,
  login,
  logout,
  fetchCurrentUser,
  loginG,
};

export default actions;
