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
import { Input, Label } from './LibraryResumeModal.styled';

export const LibraryResumeModal = ({ closer, id }) => {
  const [rate, setRate] = useState(0);
  const [book, setBook] = useState('...');
  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  const { already } = useSelector(getBooks);

  useEffect(() => {
    if (id) {
      const { review, rating } = already.find(item => item._id === id);
      review === null ? setBook('...') : setBook(review);
      setRate(rating);
    }
    // setBook('');
    // setRate(0);
  }, []);

  const handleClick = () => {
    dispatch(
      booksOperations.reviewBook({
        resume: book.review,
        rate: rate,
        id: id,
      }),
    );
    // setRate(0);
    // setBook('');
    closer();
  };

  const reviewChng = e => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setDisabled(false);
    if (e.target.value.length < 2 || rate === null) setDisabled(true);
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
            placeholder={book.review !== '' ? book : '...'}
            value={book.review}
            name="review"
            minLength={1}
            maxLength={200}
            onChange={reviewChng}
          />
        </Label>
        <ButtonWrapper>
          <Button onClick={closer}>Назад</Button>
          <Button type="submit" disabled={disabled} onClick={handleClick}>
            Зберегти
          </Button>
        </ButtonWrapper>
      </ModalContainer>
    </Modal>
  );
};

export default LibraryResumeModal;
