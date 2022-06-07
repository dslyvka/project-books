import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: grid;
  align-items: start;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const FormTitle = styled.h1`
  height: 60px;
  margin-bottom: 20px;
  padding: 11px 0;
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
