import { createSelector } from '@reduxjs/toolkit';

export const getBooks = state => state.books.items;
export const getLoading = state => state.books.loading;
export const getError = state => state.books.error;
export const getFilterRating = state => state.books.filter.filterRating;
export const getFilterTitle = state => state.books.filter.filterTitle;

export const findBook = createSelector(
  [getBooks, getFilterRating, getFilterTitle],
  (items, filterRating, filterTitle) => {
    const normalizedFilterTitle = filterTitle.toLowerCase();
    const normalizedFilterRating = filterRating.toLowerCase();

    const fileBooks = items.already.filter(({ title }) =>
      title.toLowerCase().includes(normalizedFilterTitle),
    );

    if (normalizedFilterRating !== '') {
      const RatingBooks = fileBooks.filter(
        ({ rating }) => rating === Number(normalizedFilterRating),
      );
      const sortedContacts = [...RatingBooks].sort((a, b) =>
        a.title.localeCompare(b.title),
      );
      return sortedContacts;
    }
    const sortedContacts = [...fileBooks].sort((a, b) =>
      a.title.localeCompare(b.title),
    );

    return sortedContacts;
  },
);

// import { createSelector } from '@reduxjs/toolkit';

// export const getBooks = state => state.books.items;
// export const getLoading = state => state.books.loading;
// export const getError = state => state.books.error;
// export const getFilter = state => state.books.filter;

// export const findBook = createSelector(
//   [getBooks, getFilter],
//   (items, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     const fileredContacts = items.already.filter(({ title }) =>
//       title.toLowerCase().includes(normalizedFilter),
//     );
//     const sortedContacts = [...fileredContacts].sort((a, b) =>
//       a.title.localeCompare(b.title),
//     );
//     return sortedContacts;
//   },
// );
