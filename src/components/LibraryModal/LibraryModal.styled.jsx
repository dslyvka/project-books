import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:last-child {
    align-items: center;
  }
  justify-content: space-between;

  width: 280px;
  height: 425px;
  overflow: hidden;
  padding: 43px 18px 36px 20px;

  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: rgba(255, 255, 255, 1);

  @media (min-width: 768px) {
    width: 608px;
    height: 272px;
    padding: 40px 40px 16px 40px;
  }
`;

export const Block = styled.li`
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Title = styled.h3`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #242a37;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Article = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
  margin-left: 12px;
`;

export const ArticleBlock = styled.span`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
  margin-left: 8px;
`;

export const DescriptionBlock = styled.span`
  display: flex;
  justify-content: start;
  margin-left: 30px;
  @media (min-width: 768px) {
    margin-left: 25px;
  }
`;

export const Button = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  box-sizing: border-box;
  border: none;
  background: #ff6b08;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  width: 127px;
  height: 40px;
`;
