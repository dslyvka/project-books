import LibraryIcon from '../LibraryIcon/LibraryIcon';
import {
  DivContainer,
  TrTablet,
  DivTrOther,
  Div,
  Table,
  TdTitle,
  Th,
  ThTabletOther,
  Td,
  Tr,
} from './ListAlreadyRead.styled';

function ListOther({ text, array = [] }) {
  return (
    <DivContainer margin="32px">
      {array.length !== 0 && (
        <Div>
          <h2>{text}</h2>
          <Table>
            <tbody>
              <TrTablet>
                <ThTabletOther>Навза книги</ThTabletOther>
                <ThTabletOther>Автор</ThTabletOther>
                <ThTabletOther>Рік</ThTabletOther>
                <ThTabletOther>Стор.</ThTabletOther>
              </TrTablet>
              {array.map(({ id, title, author, year, pages, status }) => (
                <Tr key={id}>
                  <DivTrOther>
                    <td> {<LibraryIcon book={status} />} </td>
                    <TdTitle>{title}</TdTitle>
                  </DivTrOther>
                  <DivTrOther>
                    <Th>Автор</Th>
                    <Td width="40px">{author}</Td>
                  </DivTrOther>
                  <DivTrOther>
                    <Th>Рік</Th>
                    <Td width="63px">{year}</Td>
                  </DivTrOther>
                  <DivTrOther>
                    <Th>Стор.</Th>
                    <Td width="45px"> {pages}</Td>
                  </DivTrOther>
                </Tr>
              ))}
            </tbody>
          </Table>
        </Div>
      )}
    </DivContainer>
  );
}

// textTwo
// going

export default ListOther;
