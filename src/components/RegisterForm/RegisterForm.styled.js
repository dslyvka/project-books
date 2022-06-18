import styled from '@emotion/styled';
import backgroundImage from '../../images/mobile/registerBackground.jpg';

const breakpoints = [480, 768, 1280];

export const StyledDiv = styled.div`
  @media (min-width: ${breakpoints[2]}px) {
    display: flex;
  } ;
`;

export const StyledForm = styled.form`
  background: rgba(9, 30, 63, 0.8);
  background-image: linear-gradient(
      to right,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${backgroundImage});
  background-size: cover;

  padding: 32px 0 44px;

  @media screen and (min-width: ${breakpoints[1]}px) {
    padding: 64px 0;
  }

  @media screen and (min-width: ${breakpoints[2]}px) {
    padding: 90px 0;
    width: 43%;
  }

  ul {
    max-width: 400px;
    margin: 0px auto;
    // padding: 0 20px;

    @media screen and (min-width: ${breakpoints[1]}px) {
      padding: 40px;
    }

    @media screen and (min-width: ${breakpoints[1]}px) {
      background-color: #ffffff;
      // height: 609px;
    }

    label {
      display: inline-block;
      margin-bottom: 8px;
      // float: left;
    }

    li {
      margin: 0 auto 20px;
      width: 280px;

      position: relative;

      @media screen and (min-width: ${breakpoints[1]}px) {
        width: 320px;
      }

      :last-of-type {
        @media screen and (min-width: ${breakpoints[1]}px) {
          margin-bottom: 35px;
        }
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

      @media screen and (min-width: ${breakpoints[1]}px) {
        color: #898f9f;
      }

      span {
        color: #f25137;
      }
    }

    input {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      // color: #a6abb9;

      border: none;
      background-image: none;
      background-color: #f5f7fa;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;

      margin: 0 auto;
      padding: 12px 0px 13px 12px;

      background-color: #f5f7fa;
      box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

      width: 100%;
      height: 42px;

      input::placeholder {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.21;
        color: #a6abb9;
      }
      input:focus {
        outline: none;
      }
    }

    .input__error {
      color: red;
      padding-top: 7px;
      display: block;

      height: 35px;

      @media screen and (min-width: ${breakpoints[1]}px) {
        height: 27px;
      }

      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
  }

  p {
    // display: inline-block;
    margin: 20px auto 0;

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
  }
`;
