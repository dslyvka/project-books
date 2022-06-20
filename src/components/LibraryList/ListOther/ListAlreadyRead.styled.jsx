import styled from '@emotion/styled';


export const divOver = styled.div`
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`


export const Button = styled.button`
font-family: 'Montserrat';
font-weight: 500;
font-size: 14px;
line-height: 17px;
color: #FFFFFF;
background: #6D7A8D;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
border: 0px;
   :hover{
    cursor: pointer;
    background: #FF6B08 ; 
   }

width: 130px;
height: 40px;`


export const Div = styled.div`
width: device-width; 
display:flex;
align-content:center;
flex-wrap: wrap;
flex-direction: column;`



export const DivContainer = styled.div`

margin-top:20px;

@media screen and (min-width: 768px) {
margin-top:40px;
}
@media screen and (min-width: 1280px) {
margin-top:${props => props.margin};
}


h2{

    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
    margin-bottom: 24px;
}

line-height: 23px;
}`


export const DivTitle = styled.div`
 display:flex;
`

export const UlTablet = styled.ul`
display:flex;
color: #898F9F;
juctify-content:end;
padding-right:20px;
justify-content: space-between;
margin-bottom:8px;`






export const UL = styled.ul`
width: 100%;
max-width:500px;

@media screen and (min-width: 768px) {
max-width:704px;
}
@media screen and (min-width: 1280px) {
max-width:1248px;
}`


export const Ulalready = styled.ul`
:last-child{
display: flex;
justify-content:center;
};
 margin-bottom:14px;
  display:flex;
:last-child {
    margin-bottom:8px;
}
    @media screen and (min-width: 768px) {
margin-bottom: 0px; 
  display:flex;
  justify-content: space-between;
          :nth-of-type(2){
    width: 120px
}
          :nth-of-type(3){
    width: 50px
}
          :nth-of-type(4){
    width: 40px
} 
    }
    :last-child {
    margin-bottom:0px;
}
}`


export const UlOther = styled.ul`
 margin-bottom:14px;
  display:flex;
  justify-content: space-between;
:last-child {
    margin-bottom:8px;

}
    @media screen and (min-width: 768px) {
margin-bottom: 0px; 
  display:flex;
  justify-content: space-between;
  
          :nth-of-type(2){
    width: 230px
}
          :nth-of-type(3){
    width: 50px
}
          :nth-of-type(4){
    width: 40px
}
  }
    :last-child {
    margin-bottom:0px;
}}`




export const Li = styled.li`
box-sizing:border-box;
display: flex;
flex-direction:column;
min-width: 280px;
min-height:178px;
box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
margin-bottom: 16px;
padding: 20px 10px 20px 20px;
word-break: break-all;
background-color: #ffffff;

    @media screen and (min-width: 768px) {
justify-content: space-between;
flex-direction:row;
min-height:62px;
align-items:center;
padding: 14px 20px 14px 20px;}`




export const LiNameBook = styled.li`
margin-left: 12px;
    @media screen and (min-width: 768px) {
width:150px;
margin-left: 12px;  }`


export const LiTitle = styled.li`
 word-break:keep-all;
margin-left:34px;
color: #898F9F;
    @media screen and (min-width: 768px) {
    display:none}`

export const LiTablet = styled.li`
display:none;

    @media screen and (min-width: 768px) {       
    display:flex;
    :nth-of-type(1){
     width:180px;
}
    :nth-of-type(2){
 width:100px;
}
    :nth-of-type(5){
 width:175px;
}}`

export const LiTabletOther = styled.li`
display:none;
    @media screen and (min-width: 768px) {
    display:flex;
    :nth-of-type(1){
        width:170px;
}
    :nth-of-type(2){
 width:195px;
}}`

export const LiData = styled.li`
margin-left: ${props => props.width};
width: 50%;
    @media screen and (min-width: 768px) {
        width: 100%;
   margin-left: 0px; }
`

export const LiSvgMobile = styled.li`
margin-left: ${props => props.width};
   @media screen and (min-width: 768px) {
   display:none;}
`

export const LiSvgTablet = styled.li`
display:none;
margin-left: ${props => props.width};
width: 50%;
    @media screen and (min-width: 768px) {
        display: block;
        width: 100%;
   margin-left: 0px; }
`

export const Span = styled.p`
width:33px;`


export const ButtonDel = styled.button`
   display:flex;
   padding:0;
   margin:0;
   border:0;
   border-radius:50px;
   background-color:#ffffff;

`


export const SvgDel = styled.svg`
   line-height:40px;
   text-transform:uppercase;
   fill:#6D7A8D;
   margin:0 5px;
   font-size:20px;
    transition: 1000ms;
   :active,
   :focus,
   :hover{
        transition: 500ms;
     transform: rotate(45deg) ;
    cursor: pointer;
    fill: #FF6B08 ; 
   }
`



export const ContainerNotCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
