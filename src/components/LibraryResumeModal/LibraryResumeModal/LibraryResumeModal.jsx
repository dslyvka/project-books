import Modal from '../../Modal/Modal';
import { Button } from './LibraryResumeModal.styled';
import { useEffect, useState } from 'react';
import Rate from '../Rate/Rate';
import {
  ModalContainer,
  ButtonWrapper,
  Title,
} from './LibraryResumeModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { booksOperations } from '../../../redux/books';
import { getBooks } from '../../../redux/books/books-selector';
import { fetchBooks } from '../../../redux/books/books-operations';
import { useRef } from 'react';
import { Input, Label } from './LibraryResumeModal.styled';

// const initialValue = {
//   id: '',
//   review: '',
// };
export const LibraryResumeModal = ({ closer, id }) => {
  const [rate, setRate] = useState(0);
  const [resume, setResume] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const closeModal = () => {
    // dispatch(modalActions.offModal());
    // dispatch(modalActions.clearModalContent());
    closer();
  };

  const handleClick = e => {
    if (rate === null || resume === '') {
      return null;
    }

    dispatch(booksOperations.reviewBook({ rate, resume, id }));
    setRate(prev => rate);
    setResume(resume);

    // togleModal();
    closer();
  };

  const reviewChng = e => {
    setResume(prev => e.target.value);
  };

  return (
    <Modal onClose={closer}>
      <ModalContainer>
        <Title>Обрати рейтинг книги</Title>
        <Rate update={setRate} init={rate} read={false} />
        <Title>Резюме</Title>
        <Label>
          <Input
            type="text"
            placeholder="..."
            value={resume || ''}
            name="review"
            minLength={1}
            maxLength={200}
            onChange={reviewChng}
          />
        </Label>
        <ButtonWrapper>
          <Button onClick={closeModal}>Назад</Button>
          <Button type="submit" onClick={handleClick}>
            Зберегти
          </Button>
        </ButtonWrapper>
      </ModalContainer>
    </Modal>
  );
};

export default LibraryResumeModal;
