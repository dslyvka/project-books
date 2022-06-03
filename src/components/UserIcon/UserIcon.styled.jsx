import styled from '@emotion/styled';

export const TextStyled = styled.span`
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #242A37;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: #f5f7fa;
`;

export const NameStuled = styled.p`
  display: none;
  margin: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 12px;
  }
`;
