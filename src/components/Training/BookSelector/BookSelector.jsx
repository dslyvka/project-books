import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { useEffect } from 'react';
import { fetchBooks } from '../../../redux/books/books-operations';

const BookSelector = ({ onChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = useSelector(state => state.training.isGoing);
  const isStarted = useSelector(state => state.training.isStarted);

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
      onKeyDown={e => {
        e.preventDefault();
      }}
      // isSearchable={false}
      isDisabled={isStarted ? true : false}
      defaultValue=""
      placeholder={isStarted ? '' : 'Оберіть книжку'}
      options={books}
      noOptionsMessage={() =>
        'У вас відсутні книги, які ви плануєте прочитати.'
      }
      onChange={book => {
        // console.log(book);
        onChange(book.value);
      }}
      styles={customStyles}
    />
  );
};

export default BookSelector;
