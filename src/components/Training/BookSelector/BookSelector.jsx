import React from 'react';
import Select from 'react-select';

const BookSelector = () => {
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
  return <Select styles={customStyles} />;
};

export default BookSelector;
