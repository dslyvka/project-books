import { useNavigate } from 'react-router-dom';
import actions from '../../redux/auth/auth-actions';
import { useDispatch } from 'react-redux';
import {
  Container,
  Title,
  ButtonStyled,
  ContainerButton,
} from './Logout.styled';

function Logout({ onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutUser = () => {
    onClose();
    dispatch(actions.logout());
    localStorage.clear();
    navigate('/login');
  };
  return (
    <Container>
      <Title>
        Якщо Ви вийдете з програми, незбереженні дані будуть втрачені
      </Title>
      <ContainerButton>
        <li>
          <ButtonStyled type="button" onClick={onClose}>
            Відміна
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled type="button" autoFocus={true} onClick={logoutUser}>
            Вийти
          </ButtonStyled>
        </li>
      </ContainerButton>
    </Container>
  );
}

export default Logout;
