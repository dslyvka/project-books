import styled from '@emotion/styled';

export const DIV = styled.div`
height:40px;
width:100px;`


export const  Container = styled.div`
display:flex;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
  flex-direction: column;
    justify-content: center;
    padding-top: 32px;
    @media screen and (min-width: 1280px) {
         padding-top: 40px;
    }`;

export const Form = styled.form`
        display: flex;
    flex-direction: row;
  justify-content: center;
`;

export const BasicDiv = styled.li`

 @media screen and (min-width: 1280px) {
             margin-right:16px ;
                  :last-child{
    margin-right:0px;
 }}`

export const SpanErr = styled.p`
margin-bottom:20px;
color:red;
max-width:280px;


        @media screen and (min-width: 768px) {
max-width:${props => props.widthtablet};

        }
         @media screen and (min-width: 1280px) {
   max-width:${props => props.widthDesc};      
   margin-top:20px;
        }

        
widthDesc
        `

export const SpanRed = styled.span`
color:red;
`


export const Input = styled.input`



    display: flex;
    flex-direction: column;
    box-sizing:border-box;
    height: 42px;
    border: 1px solid #A6ABB9;
    padding: 12px 12px 13px 12px ;
    margin-top:8px;
    margin-bottom: 20px;
    background-color: #F6F7FB;
    min-width: 280px;




        @media screen and (min-width: 768px) {
            min-width: 152px;


        margin-bottom: 24px;
         width: ${props => {
    switch (props.name) {
        case "title":
            return "704px";
        case "author":
            return "336px";
        case "date":
            return "152px";
        case "pages":
            return "152px"
        default:
            break;
    }
}};      }
 @media screen and (min-width: 1280px) {
             min-width: 134px;
             margin-bottom: 0px;


      width: ${props => {
    switch (props.name) {
        case "title":
            return "346px";
        case "author":
            return "250px";
        case "date":
            return "134px";
        case "pages":
            return "134px"
        default:
            break;
    }
}};
}
    &:focus{
        background-color: #FFFFFF;
        box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
       outline:none;
    }`;

export const DivInput = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content:center;


     @media screen and (min-width: 1280px) {
  display: flex;
    flex-direction: row;
    
    
}`

export const Label = styled.label`

      color: #898F9F;
      `
      



export const OtherInput = styled.div`
    @media screen and (min-width: 768px) {
    
        display: flex;
        justify-content:space-between;
flex-direction: row;
}`


export const NumberDiv = styled.div`
    @media screen and (min-width: 768px) {
        display: flex;
        
}`
export const ButtonDiv = styled.div`
  
        display: flex;
        justify-content:center;
          @media screen and (min-width: 1280px) {
            flex-wrap: wrap;
              margin-left:34px;
              align-content: flex-start;
              margin-top:24px;

          }`