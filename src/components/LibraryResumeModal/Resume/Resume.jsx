import Modal from '../../Modal/Modal';
import ResumeForm from '../ResumeForm/ResumeForm';
import { Button } from './Resume.styled';
import { useState } from 'react';
import Rate from '../Rate/Rate';
import { ModalContainer, ButtonWrapper, Title } from './Resume.styled';
import sprites from '../../../images/sprite/sprites.svg';
import { useNavigate } from 'react-router-dom';

export const LibraryResumeModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [rate, setRate] = useState(0);
  const [resume, setResume] = useState('');

  const navigate = useNavigate();

  const togleModal = () => {
    setShowModal(showModal => !showModal);
    navigate('library');
  };

  const updateRate = val => {
    setRate(val);
  };

  const updateResume = val => {
    setResume(val);
  };

  const getData = () => {
    if (!rate || resume === '') {
      return null;
    }
    //Отправляем данные на бек и обнуляем , закрываем
    console.log(rate, resume);
    setRate(0);
    setResume('');
    togleModal();
  };

  return (
    showModal && (
      <Modal onClose={togleModal}>
        <ModalContainer>
          <Title>Обрати рейтинг книги</Title>
          <Rate
            emptyIcon={
              <svg pointerEvents="none" width="17" height="17">
                <use href={`${sprites}#icon-Star`} />
              </svg>
            }
            fullIcon={
              <svg pointerEvents="none" width="17" height="17">
                <use href={`${sprites}#icon-Star-full`} />
              </svg>
            }
            update={updateRate}
          />
          <Title>Резюме</Title>
          <ResumeForm updateResume={updateResume} />
          <ButtonWrapper>
            <Button onClick={togleModal}>Назад</Button>
            <Button type="submit" onClick={getData}>
              Зберегти
            </Button>
          </ButtonWrapper>
        </ModalContainer>
      </Modal>
    )
  );
};

export default LibraryResumeModal;
