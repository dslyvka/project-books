import LibraryIcon from '../LibraryIcon/LibraryIcon';
import { useState } from 'react';
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
  Span,
} from './ListAlreadyRead.styled';
import Modal from '../../Modal/Modal';
import sprite from '../../../images/sprite/sprites.svg';
import DeleteButton from '../DeleteButton/DeleteButton';
import { useToggle } from '../../../hooks/useToggle';

function ListOther({ text, array = [] }) {
  const [id, setId] = useState();
  const [book, setBook] = useState();

  const { isOpen, open, close } = useToggle();

  const togleModal = e => {
    const { text } = e.currentTarget.dataset;
    const { id } = e.currentTarget;
    setId(id);
    setBook(text);
    open();
  };

  return (
    <>
      {array.length !== 0 && (
        <DivContainer margin="32px">
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
                    {status === 'going' && (
                      <LiSvgMobile width="35px">
                        <ButtonDel
                          onClick={e => togleModal(e)}
                          id={_id}
                          data-text={title}
                        >
                          <SvgDel width="20" height="20">
                            <use href={`${sprite}#icon-delete`}></use>
                          </SvgDel>
                        </ButtonDel>
                        <div>
                          {isOpen && (
                            <Modal onClose={close}>
                              <DeleteButton
                                onClose={close}
                                _id={id}
                                book={book}
                              />
                            </Modal>
                          )}
                        </div>
                      </LiSvgMobile>
                    )}
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
                    {status === 'going' ? (
                      <LiSvgTablet width="5px">
                        <ButtonDel
                          onClick={e => togleModal(e)}
                          id={_id}
                          data-text={title}
                        >
                          <SvgDel width="20" height="20">
                            <use href={`${sprite}#icon-delete`}></use>
                          </SvgDel>
                        </ButtonDel>
                        <div>
                          {isOpen && (
                            <Modal onClose={close}>
                              <DeleteButton
                                onClose={close}
                                _id={id}
                                book={book}
                              />
                            </Modal>
                          )}
                        </div>
                      </LiSvgTablet>
                    ) : (
                      <LiSvgTablet width="5px">
                        <Span></Span>
                      </LiSvgTablet>
                    )}
                  </UlOther>
                </Li>
              ))}
            </UL>
          </Div>
        </DivContainer>
      )}
    </>
  );
}

export default ListOther;
