import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://project-books-api.herokuapp.com/api';

const setToken = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

const unsetToken = () => (axios.defaults.headers.common.Authorization = '');

const formatError = ({ name, message, response }) => ({
  name,
  message,
  status: response?.status,
});

const getCurrTraining = async () => (await axios.get('/trainings')).data;

const startTraining = async details =>
  (await axios.post('/trainings', details)).data;

const addResult = async body => (await axios.patch('/trainings', body)).data;

const api = {
  formatError,
  getCurrTraining,
  startTraining,
  addResult,
};

export default api;
