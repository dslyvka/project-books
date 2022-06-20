import styled from '@emotion/styled'


export const Div = styled.div`
display:flex;

flex-direction:column;
justify-content:center;
margin-left:20px;
margin-right: 20px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color:#242A37;
}

`
export const Button = styled.button`
  display: block;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
   transition: 500ms;
  /* identical to box height */
:active,
:hover{
      transform: scale(1.03);
    transition: 500ms;
  background-color:#091E3F;
  color:white;
}
  background-color: #ff6b08;
  color: #ffffff;

  width: 171px;
  height: 42px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }


`;



export const DivButton = styled.div`
margin-top: ${props => props.margin};
display:flex;
justify-content:center;
margin-bottom: 20px;


@media screen and (min-width: 768px) { 
  margin-top:40px;  
  margin-bottom: 40px;
}
.button {
    display: block;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  /* identical to box height */
  

text-decoration:none;

  background-color: #ff6b08;
  color: #ffffff;

  width: 171px;
  height: 42px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
}
}
`

export const DivAllButt = styled.div`
display:flex;
flex-direction:column;
margin-bottom:100px;
  @media screen and (min-width: 500px) {
    flex-direction:row;

   align-items: flex-end;
    justify-content: space-evenly;
  }
    @media screen and (min-width: 768px) {
      margin-bottom:0px;



;`