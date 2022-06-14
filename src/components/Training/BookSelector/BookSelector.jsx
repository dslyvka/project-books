import React from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../../../redux/books/books-operations';

const BookSelector = ({ onChange }) => {
  // const booksToRead = useSelector(trainingSelectors.getPlanNotSelectBooks);

  // const bookSelect = booksToRead.map(book => ({
  //   ...book,
  //   label: book.title,
  //   value: book.title,
  // }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector(state => state.training.isGoing);

  const customStyles = {
    input: (provided, state) => ({
      ...provided,
      height: '34px',
    }),

    menu: (provided, state) => ({
      ...provided,
      marginTop: '5px',
      boxShadow: '0px 2px 3px rgba(9, 30, 63, 0.1)',
    }),

    singleValue: (provided, state) => ({
      ...provided,
      color: '#a6abb9',
    }),
  };
  return (
    <Select
      defaultValue=""
      placeholder="Оберіть книжку"
      options={books}
      noOptionsMessage={() =>
        'У вас відсутні книги, які ви плануєте прочитати.'
      }
      onChange={book => {
        console.log(book);
        onChange(book.value);
      }}
      styles={customStyles}
    />
  );
};

// [{ label: 'Taras', value: 'Shevchenko' }]

export default BookSelector;
