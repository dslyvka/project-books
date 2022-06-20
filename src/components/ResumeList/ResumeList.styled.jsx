import styled from '@emotion/styled'

export const DivRate = styled.div`
margin-top:8px;`

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
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #242A37;
`
export const DivTitle = styled.div`
min-width: 100px;
max-width: 200px;

`

export const DivResult = styled.div`

    margin-left: 20px;

`
export const DivUl = styled.div`
@media screen and (min-width: 550px) {
max-width:500px;
margin: 0 auto;
}
@media screen and (min-width: 768px) {
    min-width:768px;
        display:inline-flex;
    max-width:1280px;

    flex-diraction:row;
    justify-content: space-around;
    flex-wrap:wrap;
}
@media screen and (min-width: 768px) {

`

    // justify-content:center;

export const Ul = styled.ul`


padding: 15px;
min-width: 200px;
min-height: 100px;
box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
background: #ffffff;
margin-bottom: 20px;
display:flex;
justify-content: flex-start;


@media screen and (min-width: 768px) {
min-height: 200px;
min-width: 300px;
max-width: 300px;
margin-left:20px;
}

@media screen and (min-width: 1280px) {
}

`

export const H2 = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
margin: 20px auto 20px auto`


export const LiResume = styled.li`
word-break: break-all;



margin-top: 4px;
`

export const Li = styled.li`
white-space: nowrap;
margin-top: 8px;
color: ${props => props.color? props.color: " #242A37"};

@media screen and (min-width: 768px) {
    white-space: wrap;
}`

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
export const P = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;`

export const DivButton = styled.div`
margin-top:28px;
display:flex;
justify-content:center;
margin-bottom: 30px;


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

export const Svg = styled.svg`

height:100%;
fill:#6D7A8D;
cursor: pointer;
width: 100%;
   :active,
   :focus,
   :hover{
        transition: 500ms;
     transform: scale(1.1) ;
    cursor: pointer;
    fill: #FF6B08 ; 
   }

`

export const ButtonSvg = styled.button`
   display:flex;
   padding:0;
   margin:0;
   border:0;
   border-radius:20px;
   width:40px;
   background-color: transparent;
`





// export const LiTitle = styled.li`
// white-space: nowrap;
// margin-top: 8px;
// color : color: #898F9F
// @media screen and (min-width: 768px) {
//     white-space: wrap;
// }`