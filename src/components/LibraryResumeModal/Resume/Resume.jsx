import Modal from '../../Modal/Modal';
import ResumeForm from '../ResumeForm/ResumeForm';
import { Button } from './Resume.styled';
import { useState } from 'react';
import Rate from '../Rate/Rate';
import { ModalContainer, ButtonWrapper, Title } from './Resume.styled';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { booksOperations } from '../../../redux/books';
import { getBooks } from '../../../redux/books/books-selector';

export const LibraryResumeModal = () => {
  let review = '';
  let rating = 0;

  const { already } = useSelector(getBooks);
  // if (Object.keys(already)) {
  //   review = already.find(id => id).review;
  //   rating = already.find(id => id).rating;
  // }

  const [showModal, setShowModal] = useState(true);
  const [rate, setRate] = useState(rating);
  const [resume, setResume] = useState(review);

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
          <Rate update={updateRate} init={rate} read={false} />
          <Title>Резюме</Title>
          <ResumeForm updateResume={updateResume} initial={resume} />
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
