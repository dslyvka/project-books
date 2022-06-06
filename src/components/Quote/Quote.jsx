import sprite from '../../images/sprite/sprites.svg';
import { SubTitle, LiStyled, DivStyled } from './Quote.styled';

const Quote = ({ title, quotes, icon }) => {
  return (
    <DivStyled>
      <SubTitle>{title}</SubTitle>
      {quotes.map(({ id, text }) => (
        <LiStyled key={id}>
          <svg>
            <use href={`${sprite}#${icon}`}></use>
          </svg>
          {text}
        </LiStyled>
      ))}
    </DivStyled>
  );
};

export default Quote;
