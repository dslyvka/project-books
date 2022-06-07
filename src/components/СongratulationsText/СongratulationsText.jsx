import {
  Container,
  LinkStyled,
  Title,
  ButtonStyled,
  ContainerButton,
} from './СongratulationsText.styled';

import sprite from '../../images/sprite/sprites.svg';

function CongratulationsText({ onClose }) {
  return (
    <Container>
      <LinkStyled>
        <svg width="54" height="54">
          <use href={`${sprite}#icon-like`} />
        </svg>
      </LinkStyled>
      <Title>
        Вітаю!
        <br /> Ще одна книга прочитана.
      </Title>
      <ContainerButton>
        <ButtonStyled type="button" onClick={onClose}>
          Назад
        </ButtonStyled>
      </ContainerButton>
    </Container>
  );
}

export default CongratulationsText;
