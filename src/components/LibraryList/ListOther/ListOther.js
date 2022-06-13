import LibraryIcon from '../LibraryIcon/LibraryIcon';
import {
  DivContainer,
  UlTablet,
  UlOther,
  Div,
  UL,
  LiNameBook,
  LiTitle,
  LiTabletOther,
  LiData,
  Li,
} from './ListAlreadyRead.styled';

import { useDispatch } from 'react-redux';
import { booksOperations } from '../../../redux/books/';

function ListOther({ text, array = [] }) {
  const { deleteBook } = booksOperations;

  const dispatch = useDispatch();
  return (
    <DivContainer margin="32px">
      {array.length !== 0 && (
        <Div>
          <h2>{text}</h2>
          <UL>
            <UlTablet>
              <LiTabletOther>Навза книги</LiTabletOther>
              <LiTabletOther>Автор</LiTabletOther>
              <LiTabletOther>Рік</LiTabletOther>
              <LiTabletOther>Стор</LiTabletOther>
              <LiTabletOther>Видалити</LiTabletOther>
            </UlTablet>
            {array.map(({ _id, title, author, year, pages, status }) => (
              <Li key={_id}>
                <UlOther>
                  <li> {<LibraryIcon book={status} />} </li>
                  <LiNameBook>{title}</LiNameBook>
                </UlOther>
                <UlOther>
                  <LiTitle>Автор</LiTitle>
                  <LiData width="40px">{author}</LiData>
                </UlOther>
                <UlOther>
                  <LiTitle>Рік</LiTitle>
                  <LiData width="63px">{year}</LiData>
                </UlOther>
                <UlOther>
                  <LiTitle>Стор.</LiTitle>
                  <LiData width="45px"> {pages}</LiData>
                </UlOther>
                <UlOther>
                  <LiTitle>Видалити.</LiTitle>
                  <LiData width="45px">
                    <button onClick={() => dispatch(deleteBook(_id))}>
                      Del
                    </button>
                  </LiData>
                </UlOther>
              </Li>
            ))}
          </UL>
        </Div>
      )}
    </DivContainer>
  );
}

// textTwo
// going

export default ListOther;
