import LibraryIcon from '../LibraryIcon/LibraryIcon';
import {
  Tr,
  DivTr,
  Div,
  Table,
  TdTitle,
  Th,
  Td,
  ThTablet,
  DivTablet,
} from './ListOther.styled';

function ListOther({ text, array }) {
  console.log(window.innerWidth);
  return (
    <div>
      {array.length !== 0 && (
        <Div>
          <h2>{text}</h2>
          <Table>
            <tbody>
              <DivTablet>
                <ThTablet>Навза книги</ThTablet>
                <ThTablet>Автор</ThTablet>
                <ThTablet>Рік</ThTablet>
                <ThTablet>Стор.</ThTablet>
              </DivTablet>
              {array.map(({ title, author, year, pages, read }) => (
                <Tr>
                  <DivTr>
                    <td> {<LibraryIcon book={read} />} </td>
                    <TdTitle>{title}</TdTitle>
                  </DivTr>
                  <DivTr>
                    <Th>Автор</Th>
                    <Td width="40px">{author}</Td>
                  </DivTr>
                  <DivTr>
                    <Th>Рік</Th>
                    <Td width="63px">{year}</Td>
                  </DivTr>
                  <DivTr>
                    <Th>Стор.</Th>
                    <Td width="45px"> {pages}</Td>
                  </DivTr>
                </Tr>
              ))}
            </tbody>
          </Table>
        </Div>
      )}
    </div>
  );
}

// textTwo
// going

export default ListOther;
