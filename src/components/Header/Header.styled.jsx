import styled from '@emotion/styled';

export const TextStyled = styled.span`
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #242a37;  
  }
`;

export const Container = styled.div`
  display: flex;
  height: 60px;
  padding: 0 20px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: #fff;

  @media (min-width: 768px) {
    padding: 0 32px;
  }
  @media (min-width: 1280px) {
    padding: 0 16px;
  }
`;

export const ContainerToCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const ContainerNotCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonStyled = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
  margin-left: 14px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #242a37;
  transition-duration: 500ms;
  :hover {
    transform: scale(1.15);
  }
  @media (min-width: 1280px) {
    line-height: 33px;
  }
`;

export const HideMobileContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const ShowMobilecontainer = styled.div`
  display: flex;
  margin-left: 14px;
  @media (min-width: 768px) {
    display: none;
  }
`;
