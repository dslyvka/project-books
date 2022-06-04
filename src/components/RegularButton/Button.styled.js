import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  display: block;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  /* identical to box height */

  text-align: center;

  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};

  width: 280px;
  height: 60px;

  margin: 0 auto 20px;
  padding: 20px 64.3px;
`;
