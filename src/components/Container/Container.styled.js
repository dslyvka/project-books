import styled from '@emotion/styled';

export const CommonContainer = styled.div`
  width: 320px;
  min-height: 100vh;
  background-color: #f6f7fb;
  margin: 0 auto;
  padding: 0 20px;
  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;
