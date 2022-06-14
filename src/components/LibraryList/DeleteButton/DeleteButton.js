import { useDispatch } from 'react-redux';
import { booksOperations } from '../../../redux/books/';
import {
  Container,
  Title,
  ButtonStyled,
  ContainerButton,
} from './DeleteButton.styled';

function DeleteButton({ onClose, id, book }) {
  const dispatch = useDispatch();

  const delBook = () => {
    onClose();
    dispatch(booksOperations.deleteBook(id));
    //       dispatch(tokenAct(''));
    //       toast.success('You are logged out.');
  };

  return (
    <Container>
      <Title>
        Ви точно хочете видалити книжку
        <br /> {book} ?
      </Title>
      <ContainerButton>
        <li>
          <ButtonStyled type="button" onClick={onClose}>
            Відміна
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled type="button" autoFocus={true} onClick={delBook}>
            Видалити
          </ButtonStyled>
        </li>
      </ContainerButton>
    </Container>
  );
}

export default DeleteButton;
