import styled from '@emotion/styled';
export const Button = styled.button`
color: #FFFFFF;
background: #6D7A8D;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);


width: 130px;
height: 40px;`


export const Div = styled.div`
width: device-width; 
display:flex;
align-content:center;
flex-wrap: wrap;
flex-direction: column;`

export const UlTablet = styled.ul`
display:flex;
color: #898F9F;
juctify-content:end;
padding-right:20px;
justify-content: space-between;
margin-bottom:8px;`

export const DivContainer = styled.div`
margin-top:${props => props.margin};

@media screen and (min-width: 768px) {
margin-top:40px;
}
margin-top:${props => props.margin};

h2{margin-bottom: 24px;
    font-weight: 500;
    font-size: 19px;
line-height: 23px;
}`




export const UL = styled.ul`
width: 100%;
max-width:500px;

@media screen and (min-width: 768px) {
max-width:704px;
}
@media screen and (min-width: 1280px) {
max-width:1248px;
}`


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
     width:210px;
}
    :nth-of-type(2){
 width:130px;
}
    :nth-of-type(5){
 width:155px;
}}`

export const LiTabletOther = styled.li`
display:none;
    @media screen and (min-width: 768px) {
    display:flex;
    :nth-of-type(1){
        width:180px;
}
    :nth-of-type(2){
 width:180px;
}}`

export const LiData = styled.li`
margin-left: ${props => props.width};
width: 50%;
    @media screen and (min-width: 768px) {
        width: 100%;
   margin-left: 0px; }
`


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
:last-child {
    margin-bottom:8px;

}
    @media screen and (min-width: 768px) {
margin-bottom: 0px; 
  display:flex;
  justify-content: space-between;
  
          :nth-of-type(2){
    width: 200px
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
   fill:#A6ABB9;
   margin:0 5px;
   font-size:20px;
   :hover{
    fill: #FF6B08 ; 
   }


`


