import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: grid;
  align-items: start;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
    margin-top: 40px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 40px;
    margin-top: 40px;
  }
`;

export const FormTitle = styled.h1`
  height: 60px;
  margin-bottom: 20px;
  padding: 11px 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.9;
  text-align: center;
  color: #fff;
  background-color: #b1b5c2;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 25px;
  }
`;

export const CalendarsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 25px;
    flex-direction: row;
    justify-content: center;
  }
`;

export const SelectAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  margin-bottom: 35px;
  background-color: #fff;
  @media (min-width: 768px) {
    flex-grow: 1;
    margin-bottom: 0;
    margin-right: 25px;
  }
  @media (min-width: 1280px) {
    margin-right: 45px;
  }
`;

export const FormAddButton = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #242a37;
  width: 171px;
  height: 42px;
  align-self: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transition: 500ms;
    background-color: #ff6b08;
    color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 181px;
    height: 42px;
  }
`;
