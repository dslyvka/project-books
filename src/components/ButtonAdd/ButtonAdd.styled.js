import styled from '@emotion/styled';

export const Button = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  box-sizing: border-box;
  background-color: #f6f7fb;
  border: 1px solid #242a37;
  width: 171px;
  height: 42px;
  align-self: center;
  transition: 500ms;
  :active,
  &:hover {
    transform: scale(1.03);
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
