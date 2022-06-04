import styled from '@emotion/styled';

export const Button = styled.button`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
box-sizing: border-box;
 background-color: #F6F7FB;
border:1px solid #242A37;
width: 171px;
height: 42px;
&:hover,
&:focus{
    background-color: #FF6B08;
    color: #FFFFFF;
    box-shadow:0px 2px 4px rgba(0, 0, 0, 0.25);
    border: 0px;
}
@media screen and (min-width: 1280px) {
            width: 181px;
            height: 42px;    
}
`


