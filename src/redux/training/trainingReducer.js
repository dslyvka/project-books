import { createReducer, combineReducers } from '@reduxjs/toolkit';
import trainingActions from './trainingActions';

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
  addSelectedId,
  delSelectedId,
  trainingStartDate,
  trainingEndDate,
} = trainingActions;

const setIsStartedOnSuccess = (_, { payload: { data } }) => !!data?.inProgress;

const isStarted = createReducer(false, {
  [getCurrTrainingRequest]: () => false,
  [getCurrTrainingSuccess]: setIsStartedOnSuccess,

  [startTrainingSuccess]: setIsStartedOnSuccess,

  [addResultRequest]: setIsStartedOnSuccess,
});

const setBooksOnSuccess = (_, { payload: { data } }) => {
  const books = data?.books;
  return Array.isArray(books) ? books : [];
};

const books = createReducer([], {
  [getCurrTrainingRequest]: () => [],
  [getCurrTrainingSuccess]: setBooksOnSuccess,

  [startTrainingSuccess]: setBooksOnSuccess,

  [addResultSuccess]: setBooksOnSuccess,
});

const setStartDateOnSuccess = (_, { payload: { data } }) =>
  data?.startDate || '';

const startDate = createReducer('', {
  [getCurrTrainingRequest]: () => '',
  [getCurrTrainingSuccess]: setStartDateOnSuccess,

  [startTrainingSuccess]: setStartDateOnSuccess,

  [addResultSuccess]: setStartDateOnSuccess,
});

const setEndDateOnSuccess = (_, { payload: { data } }) =>
  data?.finishDate || '';

const endDate = createReducer('', {
  [getCurrTrainingRequest]: () => '',
  [getCurrTrainingSuccess]: setEndDateOnSuccess,

  [startTrainingSuccess]: setEndDateOnSuccess,

  [addResultSuccess]: setEndDateOnSuccess,
});

const setResultsOnSuccess = (_, { payload: { data } }) => {
  const results = data?.result;

  return Array.isArray(results) ? results : [];
};

const results = createReducer([], {
  [getCurrTrainingRequest]: () => [],
  [getCurrTrainingSuccess]: setResultsOnSuccess,

  [startTrainingSuccess]: setResultsOnSuccess,

  [addResultSuccess]: setResultsOnSuccess,
});

const selectedIds = createReducer([], {
  [getCurrTrainingRequest]: () => [],

  [startTrainingSuccess]: () => [],

  [addSelectedId]: (state, { payload }) => [...state, payload],

  [delSelectedId]: (state, { payload }) => state.filter(id => id !== payload),
});

const selectStartDate = createReducer('', {
  [getCurrTrainingRequest]: () => '',

  [startTrainingSuccess]: () => '',

  [trainingStartDate]: (_, { payload }) => payload,
});

const selectEndDate = createReducer('', {
  [getCurrTrainingRequest]: () => '',

  [startTrainingSuccess]: () => '',

  [trainingEndDate]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [getCurrTrainingRequest]: () => true,
  [getCurrTrainingSuccess]: () => false,
  [getCurrTrainingError]: () => false,

  [startTrainingRequest]: () => true,
  [startTrainingSuccess]: () => false,
  [startTrainingError]: () => false,

  [addResultRequest]: () => true,
  [addResultSuccess]: () => false,
  [addResultError]: () => false,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [getCurrTrainingRequest]: () => null,
  [getCurrTrainingError]: setError,

  [startTrainingRequest]: () => null,
  [startTrainingError]: setError,

  [addResultRequest]: () => null,
  [addResultError]: setError,
});

export default combineReducers({
  isStarted,
  books,
  startDate,
  endDate,
  results,
  selectedIds,
  selectStartDate,
  selectEndDate,
  loading,
  error,
});
