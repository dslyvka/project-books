import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  flex-direction: column;
  background: #ffffff;
  padding: 48px 20px;
  width: 280px;
  @media (min-width: 768px) {
    width: 394px;
  }
`;

export const UserTitle = styled.h3`
  margin-bottom: 14px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #242a37;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
export const Title = styled.p`
  margin-bottom: 14px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #242a37;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
