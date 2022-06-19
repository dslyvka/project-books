import { createAction } from '@reduxjs/toolkit';

export const changeFilterTitle = createAction('books/changeFilter');

export const changeFilterRating = createAction('books/changeFilterRating');

export const chackboxRaview = createAction('books/chackboxRaview');
