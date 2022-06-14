import LibraryIcon from '../LibraryIcon/LibraryIcon';
import { useState } from 'react';
import { useSelector } from 'react-redux';
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
import Modal from '../../Modal/Modal';
import sprite from '../../../images/sprite/sprites.svg';
import DeleteButton from '../DeleteButton/DeleteButton';

import { useDispatch } from 'react-redux';
import { booksOperations } from '../../../redux/books/';

function ListOther({ text, array = [] }) {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);
  const { deleteBook } = booksOperations;

  const togleModal = () => {
    setShowModal(showModal => !showModal);
  };

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
                  <div>
                    {showModal && (
                      <Modal onClose={togleModal}>
                        <DeleteButton
                          onClose={togleModal}
                          id={_id}
                          book={title}
                        />
                      </Modal>
                    )}
                  </div>
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
                    <ButtonDel onClick={() => togleModal()}>
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
