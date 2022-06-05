import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  width: 280px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  background: #FFFFFF;
  box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);   
  
  @media screen and (min-width: 768px) {
    width: 290px;
    height: 60px;
}
`;

export const Separator = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 38px;
margin: 0;
padding: 0;
color: #091E3F;
`;

export const RedSeparator = styled(Separator)`
color: #FF0000;
`;