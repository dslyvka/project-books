import { createSelector } from '@reduxjs/toolkit';
import { getBooks } from '../books/books-selector';

const getIsStarted = state => state.training.isStarted;

const getAllBooks = state => state.training.books;

const getStartDate = state => state.training.startDate;
const getEndDate = state => state.training.endDate;

const getSelectIds = state => state.training.selectedIds;

const getSelectBooks = createSelector([getBooks, getSelectIds], (books, ids) =>
  ids.reduce((acc, id) => {
    const book = books.find(({ _id }) => _id === id);
    return book ? [...acc, book] : acc;
  }, []),
);

const selectStartDate = state => state.training.selectStartDate;
const selectEndDate = state => state.training.selectEndDate;

const getLoading = state => state.training.loading;

const getError = state => state.training.error;

const getResults = state =>
  state.training.results
    .map(day => {
      const date = day.date;
      const res = day.stats.map(({ time, pages }) => {
        return { date, time, pages };
      });
      return res;
    })
    .flat()
    .sort(function (a, b) {
      return b.date.splite('.').join('') - a.date.split('.').join('');
    });

const getTotalPages = state =>
  state.training.books.reduce(function (acc, { totalPages }) {
    return acc + totalPages;
  }, 0);

const getChartResults = state =>
  state.training.results.map(day => {
    const date = day.date;
    const plannedPages = day.plannedPages;
    const factPages = day.factPages;
    return { date, plannedPages, factPages };
  });

const trainingSelectors = {
  getIsStarted,
  getAllBooks,
  getStartDate,
  getEndDate,
  getSelectIds,
  getSelectBooks,
  selectStartDate,
  selectEndDate,
  getLoading,
  getError,
  getResults,
  getTotalPages,
  getChartResults,
};

export default trainingSelectors;
