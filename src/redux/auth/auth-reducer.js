import {
  configureStore,
  getDefaultMiddleware,
  createReducer,
  combineReducers,
} from '@reduxjs/toolkit';

import actions from './auth-actions';

const { register, login, logout, fetchCurrentUser } = actions;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isPageRefreshing: false,
};

const authReducer = createReducer(initialState, {
  [register.fulfilled]: (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    token: payload.token,
    user: payload.user,
  }),
  [register.rejected]: (_, { payload }) => {
    console.log(payload);
  },
  [login.fulfilled]: (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    token: payload.token,
    user: payload.user,
  }),
  [logout.fulfilled]: (state, _) => ({
    ...state,
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  }),
  [logout.rejected]: (_, { payload }) => {
    console.log(payload);
  },
  [fetchCurrentUser.pending]: (state, { payload }) => ({
    ...state,
    isPageRefreshing: true,
  }),
  [fetchCurrentUser.rejected]: (state, { payload }) => ({
    ...state,
    isLoggedIn: false,
    isPageRefreshing: false,
  }),
  [fetchCurrentUser.fulfilled]: (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    user: payload,
    isPageRefreshing: false,
  }),
});

export default authReducer;
