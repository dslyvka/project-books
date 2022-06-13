import LibraryIcon from '../LibraryIcon/LibraryIcon';
import {
  DivContainer,
  DivTitle,
  UlTablet,
  UlOther,
  Div,
  UL,
  LiNameBook,
  LiTitle,
  LiTabletOther,
  LiData,
  Li,
  LiSvgTablet,
  LiSvgMobile,
  ButtonDel,
  SvgDel,
} from './ListAlreadyRead.styled';
import { ReactComponent as DeleteIcon } from '../../../images/icons/training/deleteIcon.svg';
import sprite from '../../../images/sprite/sprites.svg';

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
              <LiTabletOther></LiTabletOther>
            </UlTablet>
            {array.map(({ _id, title, author, year, pages, status }) => (
              <Li key={_id}>
                <UlOther>
                  <DivTitle>
                    <li> {<LibraryIcon book={status} />} </li>
                    <LiNameBook>{title}</LiNameBook>
                  </DivTitle>
                  <LiSvgMobile width="35px">
                    <ButtonDel
                      onClick={() => {
                        console.log(_id);
                        dispatch(deleteBook(_id));
                      }}
                    >
                      <SvgDel width="20" height="20">
                        <use href={`${sprite}#icon-delete`}></use>
                      </SvgDel>
                    </ButtonDel>
                  </LiSvgMobile>
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
                  <LiTitle>Стор</LiTitle>
                  <LiData width="50px"> {pages}</LiData>
                </UlOther>
                <UlOther>
                  <LiSvgTablet width="5px">
                    <ButtonDel
                      onClick={() => {
                        console.log(_id);
                        dispatch(deleteBook(_id));
                      }}
                    >
                      <SvgDel width="20" height="20">
                        <use href={`${sprite}#icon-delete`}></use>
                      </SvgDel>
                    </ButtonDel>
                  </LiSvgTablet>
                </UlOther>
              </Li>
            ))}
          </UL>
        </Div>
      )}
    </DivContainer>
  );
}

export default ListOther;
