import { createAction } from '@reduxjs/toolkit';

const getCurrTrainingRequest = createAction('training/getCurrTraining/request');
const getCurrTrainingSuccess = createAction('training/getCurrTraining/success');
const getCurrTrainingError = createAction('training/getCurrTraining/error');

const startTrainingRequest = createAction('training/startTraining/request');
const startTrainingSuccess = createAction('training/startTraining/success');
const startTrainingError = createAction('training/startTraining/error');

const addResultRequest = createAction('training/addResult/request');
const addResultSuccess = createAction('training/addResult/success');
const addResultError = createAction('training/addResult/error');

const addSelectedId = createAction('training/addSelectedId');

const delSelectedId = createAction('training/delSelectedId');

const trainingStartDate = createAction('training/trainingStartDate');
const trainingEndDate = createAction('training/trainingEndDate');

const trainingActions = {
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
};

export default trainingActions;
