import styled from "@emotion/styled";

export const Div = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
display:flex;
flex-direction:column;
justify-content:space-around;
    margin-bottom:20px;


@media screen and (min-width: 768px){
    flex-direction:row;
    justify-content:space-around;
    margin-bottom:30px;

}
`

export const DivInput = styled.div`
display:flex;
flex-direction:column;
margin: 0 auto ; 
`

export const Label = styled.label`
margin-bottom: 8px;
color: #898F9F;`

export const Input = styled.input`
max-width:300px;
margin-bottom: 8px;

border: 1px solid #A6ABB9;
padding: 10px 10px 10px 10px;
height:42px;
@media screen and (min-width: 768px){
    margin-bottom: 0px;
    max-width:400px;
  padding: 10px 15px 10px 15px;  
}
`