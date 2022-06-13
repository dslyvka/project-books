import { api } from '../../services';
import { trainingActions, trainingSelectors } from './index';
import { fetchBooks } from '../books/books-operations';

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
    const data = await api.getCurrTraining(startDate, endDate, books);
    dispatch(getCurrTrainingSuccess(data));
  } catch (error) {
    dispatch(getCurrTrainingError(api.formatError(error)));
  }
};

const getTrainingPageData = () => async (dispatch, getState) => {
  await dispatch(api.getCurrTraining());

  const isTrainStarted = trainingSelectors.getIsStarted(getState());

  if (!isTrainStarted) dispatch(fetchBooks());
};

const startTraining = details => async dispatch => {
  dispatch(startTrainingRequest());
  try {
    const data = await api.startTraining(details);
    dispatch(startTrainingSuccess(data));
  } catch (error) {
    dispatch(startTrainingError(api.formatError(error)));
  }
};

const addResult = body => async dispatch => {
  dispatch(addResultRequest());
  try {
    const data = api.addResult(body);
    dispatch(addResultSuccess(data));
  } catch (error) {
    dispatch(addResultError(api.formatError(error)));
  }
};

const trainingOperations = {
  getCurrTraining,
  getTrainingPageData,
  startTraining,
  addResult,
};

export default trainingOperations;
