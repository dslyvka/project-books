import styled from '@emotion/styled';

export const Table = styled.table`
width: 100%;
`


export const Tr = styled.tr`
box-sizing:border-box;
display: flex;
flex-direction:column;

min-width: 280px;

min-height:178px;
box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
margin-bottom: 16px;
padding: 20px 10px 20px 20px;
word-break: break-all;
    @media screen and (min-width: 768px) {
justify-content: space-between;
flex-direction:row;
min-height:62px;
align-items:center;
padding: 14px 20px 14px 20px;


}`


export const TdTitle = styled.td`
margin-left: 12px;
    @media screen and (min-width: 768px) {
width:150px;
margin-left: 12px;
    }
`

export const Th = styled.th`
 word-break:keep-all;
margin-left:34px;
    @media screen and (min-width: 768px) {
    display:none}

`
export const ThTablet = styled.th`
display:none;
    @media screen and (min-width: 768px) {
    display:flex;
    :first-child{
        width:210px;
}
    :nth-child(2){
 width:130px;
}
    :nth-child(5){
 width:155px;
}}

`

export const Td = styled.td`
margin-left: ${props => props.width};
width: 50%;
    @media screen and (min-width: 768px) {
        width: 100%;
   margin-left: 0px; }
`
//     @media screen and (min-width: 500px) {
//         display:flex;
// justify-content:center;
//  }



export const DivTr = styled.div`
 margin-bottom:14px;
  display:flex;
:last-child {
    margin-bottom:8px;

}
    @media screen and (min-width: 768px) {
margin-bottom: 0px; 
  display:flex;
  justify-content: space-between;
          :nth-child(2){
    width: 120px
}
          :nth-child(3){
    width: 50px
}
          :nth-child(4){
    width: 40px
}
  
    }
    :last-child {
    margin-bottom:0px;

}

}


`

export const Div = styled.div`
width: device-width; 
display:flex;
align-content:center;
flex-wrap: wrap;
flex-direction: column;
`

export const DivTablet = styled.div`
display:flex;
juctify-content:end;
padding-right:20px;
    justify-content: space-between;

`
