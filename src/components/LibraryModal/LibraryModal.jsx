import Modal from '../Modal/Modal';
import { useState } from 'react';
import sprites from '../../images/sprite/sprites.svg';
import {
  Block,
  ModalContainer,
  Button,
  Title,
  Article,
  Description,
  ArticleBlock,
  DescriptionBlock,
} from './LibraryModal.styled';
import { useWindowWidth } from '@react-hook/window-size';

const LibraryModal = () => {
  const onlyWidth = useWindowWidth();
  const [showModal, setShowModal] = useState(true);

  const togleModal = () => {
    setShowModal(showModal => !showModal);
    sessionStorage.setItem('firstVisit', '1');
  };

  return (
    showModal && (
      <Modal onClose={togleModal}>
        <ModalContainer>
          <ul>
            <Block>
              <Title>
                Крок 1.
                <br />
              </Title>
              <ArticleBlock>
                <svg width="22" height="17" fill="#a6abb9">
                  <use href={`${sprites}#icon-book`}></use>
                </svg>
                <Article>Створіть особисту бібліотеку</Article>
              </ArticleBlock>
              <DescriptionBlock>
                <svg width="35" height="13">
                  <use href={`${sprites}#icon-Vector-enter`}></use>
                </svg>
                <Description>
                  Додайте до неї книжки, які маєте намір прочитати.
                </Description>
              </DescriptionBlock>
            </Block>
            <Block>
              <Title>
                Крок 2.
                <br />
              </Title>
              <ArticleBlock>
                <svg width="22" height="17">
                  <use href={`${sprites}#icon-flag`}></use>
                </svg>
                <Article>Сформуйте своє перше тренування</Article>
              </ArticleBlock>
              <DescriptionBlock>
                <svg width="35" height="13">
                  <use href={`${sprites}#icon-Vector-enter`}></use>
                </svg>
                <Description>
                  Визначте ціль, оберіть період, розпочинайте тренування.
                </Description>
              </DescriptionBlock>
            </Block>
          </ul>
          {onlyWidth < 768 && <Button onClick={togleModal}>Ok</Button>}
        </ModalContainer>
      </Modal>
    )
  );
};

export default LibraryModal;
