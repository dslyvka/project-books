import Modal from '../../Modal/Modal';
import ResumeForm from '../ResumeForm/ResumeForm';
import { Button } from './Resume.styled';
import { useState } from 'react';
import Rate from '../Rate/Rate';
import { ModalContainer, ButtonWrapper, Title } from './Resume.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { booksOperations } from '../../../redux/books';

export const LibraryResumeModal = () => {
  const [showModal, setShowModal] = useState(true);
  const [rate, setRate] = useState(0);
  const [resume, setResume] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

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
    dispatch(booksOperations.reviewBook({ rate, resume, id }));
    togleModal();
  };

  return (
    showModal && (
      <Modal onClose={togleModal}>
        <ModalContainer>
          <Title>Обрати рейтинг книги</Title>
          <Rate update={updateRate} init={false} read={false} />
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
