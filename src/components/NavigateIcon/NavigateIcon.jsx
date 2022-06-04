import { LinkStyled, Conteiner } from './NavigateIcon.styled';
import { NavLink } from 'react-router-dom';

import sprite from '../../images/sprite/sprites.svg';

function NavigateIcon() {
  return (
    <Conteiner>
      <NavLink to="training">
        <LinkStyled>
          <svg width="22" height="17">
            <use href={`${sprite}#icon-book`} />
          </svg>
        </LinkStyled>
      </NavLink>
      <NavLink to="library" style={{ margin: '0 0 0 8px' }}>
        <LinkStyled>
          <svg width="20" height="17">
            <use href={`${sprite}#icon-home`} />
          </svg>
        </LinkStyled>
      </NavLink>
    </Conteiner>
  );
}

export default NavigateIcon;
