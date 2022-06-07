import {
  Container,
  LinkStyled,
  Title,
  ButtonStyled,
  ContainerButton,
} from './MotivationText.styled';

import sprite from '../../images/sprite/sprites.svg';

function MotivationText({ onClose }) {
  //   const navigate = useNavigate();
  //     const [logout] = useLogoutMutation(token);

  // const logoutUser = token => {
  //   console.log(token);
  //   togleModal();
  //       logout(token);
  //       dispatch(logAct(false));
  //       dispatch(tokenAct(''));
  //       toast.success('You are logged out.');
  //       navigate('/login');
  // };
  return (
    <Container>
      <LinkStyled>
        <svg width="54" height="54">
          <use href={`${sprite}#icon-like`} />
        </svg>
      </LinkStyled>
      <Title>
        Ти молодчина,
        <br /> але потрібно швидше!
        <br />
        Наступного разу тобі все вдасться)
      </Title>
      <ContainerButton>
        <li>
          <ButtonStyled type="button" autoFocus={true}>
            Нове тренування
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled type="button" onClick={onClose}>
            Назад
          </ButtonStyled>
        </li>
      </ContainerButton>
    </Container>
  );
}

export default MotivationText;
