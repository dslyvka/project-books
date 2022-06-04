import styled from '@emotion/styled';

export const Modal = styled.span`
  width: 280px;
  height: 425px;
  margin-top: 153px;
  overflow: hidden;
  padding-top: 43px;
  padding-bottom: 36px;

  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media (min-width: 768px) {
    width: 608px;
    height: 272px;
    margin-top: 372px;
    padding: 40px 40px 16px;
  }
  @media (min-width: 1280px) {
    margin-top: 207px;
  }
  align-items: center;
  z-index: 1200;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 1200;
`;

export const Block = styled.li`
  padding: 10px 20px;

  @media (min-width: 768px) {
    padding: 0 0 24px;
  }
`;
