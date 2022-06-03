import React from 'react';
import  sprite  from '../../images/sprite/sprites.svg'             
import ButtonGoogle from './GoogleAuth.styles';


const BASE_URL = 'http://localhost:3000/api';
// const BASE_URL = 'https://project-books.netlify.app/';


const GoogleAuthBtn = () => {
    return (
        <ButtonGoogle>
            <a
                href={`${BASE_URL}/users/google`}
                className="google-btn"
            >
                <svg width="20" height="20">
                    <use href={`${sprite}#icon-google`}>
                </use>
            </svg>
                Google
            </a>
        </ButtonGoogle>
    );
};

export default GoogleAuthBtn;