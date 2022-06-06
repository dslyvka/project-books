import LibraryIcon from '../LibraryIcon/LibraryIcon';
import {
  TdTitle,
  Div,
  Table,
  DivTablet,
  ThTablet,
  DivTr,
  Tr,
  Th,
  Td,
} from './ListAlreadyRead.styled';
import ResumeButton from '../ResumeButton/ResumeButton';

function ListAlreadyRead({ text, array }) {
  const already = array.filter(arr => arr.read === 'already');
  return (
    <div>
      {already && (
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
              {already.map(({ title, author, year, pages, raiting, read }) => (
                <Tr>
                  <DivTr>
                    <td>{<LibraryIcon book={read} />}</td>
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
                    <Td width="25px"> {raiting}</Td>
                  </DivTr>
                  <DivTr>
                    <td>
                      <ResumeButton>Resume</ResumeButton>
                    </td>
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

export default ListAlreadyRead;
