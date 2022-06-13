import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { trainingActions, trainingSelectors } from '.';
import { fetchBooks } from '../books/books-operations';

axios.defaults.baseURL = 'https://project-books-api.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
const getCurrTrainingApi = async () => (await axios.get('/trainings')).data;

const startTrainingApi = async details =>
  (await axios.post('/trainings', details)).data;

const addResultApi = async body => (await axios.patch('/trainings', body)).data;

const formatErrorApi = ({ name, message, response }) => ({
  name,
  message,
  status: response?.status,
});

const {
  getCurrTrainingRequest,
  getCurrTrainingSuccess,
  getCurrTrainingError,
  startTrainingRequest,
  startTrainingSuccess,
  startTrainingError,
  addResultRequest,
  addResultSuccess,
  addResultError,
} = trainingActions;

const getCurrTraining = (startDate, endDate, books) => async dispatch => {
  dispatch(getCurrTrainingRequest());

  try {
    const data = await getCurrTrainingApi(startDate, endDate, books);
    dispatch(getCurrTrainingSuccess(data));
  } catch (error) {
    dispatch(getCurrTrainingError(formatErrorApi(error)));
  }
};

const getTrainingPageData = () => async (dispatch, getState) => {
  await dispatch(getCurrTrainingApi());

  const isTrainStarted = trainingSelectors.getIsStarted(getState());

  if (!isTrainStarted) dispatch(fetchBooks());
};

const startTraining = details => async dispatch => {
  dispatch(startTrainingRequest());
  try {
    const data = await startTrainingApi(details);
    dispatch(startTrainingSuccess(data));
  } catch (error) {
    dispatch(startTrainingError(formatErrorApi(error)));
  }
};

const addResult = body => async dispatch => {
  dispatch(addResultRequest());
  try {
    const data = addResultApi(body);
    dispatch(addResultSuccess(data));
  } catch (error) {
    dispatch(addResultError(formatErrorApi(error)));
  }
};

const trainingOperations = {
  getCurrTraining,
  getTrainingPageData,
  startTraining,
  addResult,
};

export default trainingOperations;
