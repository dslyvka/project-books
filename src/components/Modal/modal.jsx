import { useState, useEffect } from 'react';
import { ModalWrapper, Modal, Block } from './modal.styled';
import sprites from '../../images/sprite/sprites.svg';
import { useWindowWidth } from '@react-hook/window-size';

const ModalView = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  const onlyWidth = useWindowWidth();

  useEffect(() => {
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
    };
  });

  const close = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') closeModal();
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    modalIsOpen && (
      <ModalWrapper onClick={close}>
        <Modal>
          <ul>
            <Block>
              Крок 1.
              <br />
              <svg width="22" height="17">
                <use href={`${sprites}#icon-book`}></use>
              </svg>
              <p>Створіть особисту бібліотеку</p>
              <svg width="10" height="12">
                <use href={`${sprites}#icon-Vector-enter`}></use>
              </svg>
              <p>Додайте до неї книжки, які маєте намір прочитати.</p>
            </Block>
            <Block>
              Крок 2.
              <br />
              <svg width="22" height="17">
                <use href={`${sprites}#icon-flag`}></use>
              </svg>
              <p>Сформуйте своє перше тренування</p>
              <svg width="10" height="12">
                <use href={`${sprites}#icon-Vector-enter`}></use>
              </svg>
              <p>Визначте ціль, оберіть період, розпочинайте тренування.</p>
            </Block>
          </ul>
          {onlyWidth < 768 && <button onClick={closeModal}>Ok</button>}
        </Modal>
      </ModalWrapper>
    )
  );
};

export default ModalView;
