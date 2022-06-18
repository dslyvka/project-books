import styled from '@emotion/styled';
import backgroundImageMobile from '../../images/mobile/registerBackground.jpg';
import backgroundImageTablet from '../../images/tablet/registerBackground.jpg';
import backgroundImageDesktop from '../../images/desktop/registerBackground.jpg';
import sprite from '../../images/sprite/sprites.svg';

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
    url(${backgroundImageMobile});
  background-size: cover;

  padding: 32px 0 32px;

  @media screen and (min-width: ${breakpoints[1]}px) {
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${backgroundImageTablet});
    padding: 64px 0;
  }

  @media screen and (min-width: ${breakpoints[2]}px) {
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${backgroundImageDesktop});
    padding: 245px 75px 175px;
    width: 550px;
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

    // .input__plug {
    //   display: block;
    //   height: 37px;
    // }
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

export const StyledP = styled.p`
  display: block;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;
  text-align: center;

  width: 229px;

  margin: 0 auto;
  margin-bottom: 28px;
  // padding-top: 49px;

    @media screen and (min-width: ${breakpoints[1]}px) {
        width: 526px;

        font-size: 24px;
        line-height: 1.59;

        //  padding-top: 129px;
         margin-bottom: 32px;
      }

    @media screen and (min-width: ${breakpoints[2]}px) {
      font-size: 24px;
      line-height: 40px;

      // padding-top: 268px;
      width: 397px;
    }




  color: #242a37;

  position: relative;

  svg {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);

    height: 24px;
    width: 24px;

    @media screen and (min-width: ${breakpoints[1]}px) {
      top: -40px;
          height: 31px;
    width: 31px;

    }
  }

  ::after { 
    content: '';
    position: absolute;
    border: 0.5px solid #898F9F;
    background-color: #898F9F;
    border-radius: 2px;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;

        @media screen and (min-width: ${breakpoints[1]}px) {
      width: 150px;
    }



}
  }
`;

export const SubP = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;

  text-align: center;

  // padding-bottom: 16px;

  @media screen and (min-width: ${breakpoints[1]}px) {
    font-size: 20px;
    line-height: 1.2;

    // padding-bottom: 71px;
  }

  color: #898f9f;
`;

export const ContainerP = styled.div`
  padding-top: 49px;
  padding-bottom: 16px;
  @media screen and (min-width: ${breakpoints[1]}px) {
    padding-top: 126px;
    padding-bottom: 71px;
  }
  @media screen and (min-width: ${breakpoints[2]}px) {
    padding-top: 268px;
    padding-bottom: 266px;
    width: 100%;
  }
`;
