import { useDispatch } from 'react-redux';
import { booksOperations } from '../../../redux/books/';
import {
  Container,
  Title,
  ButtonStyled,
  ContainerButton,
} from './DeleteButton.styled';

function DeleteButton({ onClose, _id, book }) {
  const dispatch = useDispatch();
  // console.log(_id);

  const delBook = () => {
    onClose();
    dispatch(booksOperations.deleteBook(_id));

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
