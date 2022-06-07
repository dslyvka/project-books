import LibraryIcon from '../LibraryIcon/LibraryIcon';
import {
  DivContainer,
  Div,
  DivTr,
  DivTablet,
  Table,
  ThTablet,
  Tr,
  Th,
  Td,
  TdTitle,
} from './ListAlreadyRead.styled';
import ResumeButton from '../ResumeButton/ResumeButton';

function ListAlreadyRead({ text, array }) {
  return (
    <DivContainer margin="80px">
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
                <ThTablet>Рейтинг</ThTablet>
                <ThTablet></ThTablet>
              </DivTablet>
              {array.map(
                ({ id, title, author, year, pages, rating, status }) => (
                  <Tr key={id}>
                    <DivTr>
                      <td>{<LibraryIcon book={status} />}</td>
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
                    <DivTr>
                      <Th>Рейтинг</Th>
                      <Td width="25px"> {rating}</Td>
                    </DivTr>
                    <DivTr>
                      <td>
                        <ResumeButton>Resume</ResumeButton>
                      </td>
                    </DivTr>
                  </Tr>
                ),
              )}
            </tbody>
          </Table>
        </Div>
      )}
    </DivContainer>
  );
}

export default ListAlreadyRead;
