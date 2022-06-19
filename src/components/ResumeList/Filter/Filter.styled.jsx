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

        margin: 10px 100px 30px 100px; 

}
@media screen and (min-width: 1280px){


        margin: 10px 300px 30px 300px; 

}
`

export const DivInput = styled.div`
display:flex;
flex-direction:column;
margin: 0 auto ; 
`
export const DivInputCheck = styled.div`
display:flex;
justify-content:start;



margin: 10px auto ; 

@media screen and (min-width: 768px){
    flex-direction:column;
    justify-content:start;
align-items:start;

margin: 0 auto 0 ; 


}

`


export const Label = styled.label`
margin-bottom: 8px;
color: #898F9F;

`

export const LabelCheck = styled.label`
display:flex;
color: #898F9F;
align-items:center;
margin-right: 10px;
@media screen and (min-width: 768px){
    margin-bottom: 8px;
}


`


export const Input = styled.input`
max-width:300px;
margin-bottom: 8px;

border: 1px solid #A6ABB9;
padding: 10px 10px 10px 10px;
height:42px;
background-color: #F6F7FB;
:focus{
            background-color: #FFFFFF;
        box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
       outline:none;

}

@media screen and (min-width: 768px){
    margin-bottom: 0px;
    max-width:400px;
  padding: 10px 15px 10px 15px;  
}
`

export const InputCheckbox = styled.input`

width: 30px;
height: 30px;

@media screen and (min-width: 768px){
width: 42px;
height: 42px;
сolor: black;
border-radius: 100px;
}
`