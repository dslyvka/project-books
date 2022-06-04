import styled from '@emotion/styled';
import backgroundImage from '../../images/mobile/registerBackground.jpg';

export const StyledForm = styled.form`
  background: rgba(9, 30, 63, 0.8);
  background-image: linear-gradient(
      to right,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${backgroundImage});
  background-size: cover;

  padding: 32px 20px 44px;
  p {
    margin-top: 0;
    margin-bottom: 0;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.23;
    /* identical to box height */

    color: #898f9f;
    text-align: center;

    a {
      color: #ff6b08;
    }

    label {
      display: inline-block;
      margin-bottom: 8px;
      float: left;
    }

    input {
      border: none;
      background-image: none;
      background-color: transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;

      margin: 0 auto 20px;

      background-color: #f5f7fa;
      box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

      width: 100%;
      height: 42px;
    }
  }

  .form__label {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.21;

    text-align: left;

    color: #ffffff;

    span {
      color: #f25137;
    }
  }
`;
