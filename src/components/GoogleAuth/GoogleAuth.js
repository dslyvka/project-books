import React from 'react';
import sprite from '../../images/sprite/sprites.svg';
import ButtonGoogle from './GoogleAuth.styled';

const BASE_URL = 'https://project-books-api.herokuapp.com/api';
// const BASE_URL = 'https://project-books.netlify.app/';

const GoogleAuthBtn = () => {
  return (
    <ButtonGoogle>
        <svg width="20" height="20">
          <use href={`${sprite}#icon-google`}></use>
        </svg>
      <a
        href={`${BASE_URL}/users/google`}
        className="google-btn"
        // target="_blank" rel="noreferrer"
      >
        Google
      </a>
    </ButtonGoogle>
  );
};

export default GoogleAuthBtn;
