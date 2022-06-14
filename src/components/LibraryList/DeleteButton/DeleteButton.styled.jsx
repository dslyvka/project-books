import styled from '@emotion/styled'

export const ButtonDel = styled.button`
   display:flex;
   padding:0;
   margin:0;
   border:0;
   border-radius:50px;
   background-color:#ffffff;
   overflow:hidden;
`

export const SvgDel = styled.svg`
   line-height:40px;
   text-transform:uppercase;
   fill:#6D7A8D;
   margin:0 5px;
   font-size:20px;
   :hover{
    cursor: pointer;
    fill: #FF6B08 ; 
   }
`


export const Container = styled.div`
  display: block;
  flex-direction: column;
  background: #ffffff;
  padding: 48px 22px;
  width: 280px;
  @media (min-width: 768px) {
    width: 394px;
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #242a37;
  @media (min-width: 768px) {
    font-size: 17px;
    margin-bottom: 24px;
  }
`;

export const ButtonStyled = styled.button`
  height: 40px;
  width: 97px;
  background-color: inherit;
  border: 1px solid #242a37;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #242a37;
  transition-duration: 400ms;
  :hover,
  :focus {
    background-color: #ff6b08;
    color: #ffffff;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: scale(1.05);
  }
  @media (min-width: 768px) {
    width: 130px;
  }
`;

export const ContainerButton = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;



