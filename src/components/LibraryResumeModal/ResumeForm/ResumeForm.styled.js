import styled from '@emotion/styled';

export const Input = styled.textarea`
  display: block;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;

  width: 240px;
  height: 170px;
  padding: 8.57px;
  border: 1px solid #a6abb9;
  overflow: hidden;
  resize: none;
  word-break: break-all;
  :hover {
    border: 1px solid #a6abb9;
    outline: none;
  }
  :focus {
    border: 1px solid #a6abb9;
    outline: none;
  }
  @media (min-width: 768px) {
    width: 568px;
  }
`;

export const Label = styled.label`
  word-break: break-all;
`;
