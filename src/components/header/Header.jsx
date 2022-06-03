import {
  Container,
  TextStyled,
  ContainerToCenter,
  ContainerNotCenter,
  ButtonStyled,
  HideMobileContainer,
  ShowMobilecontainer,
} from './Header.styled';
import { Outlet } from 'react-router-dom';

import UserIcon from '../UserIcon/UserIcon';
import NavigateIcon from '../NavigateIcon/NavigateIcon';

function Header() {
  //   const navigate = useNavigate();
  //     const [logout] = useLogoutMutation(token);

  const logoutUser = token => {
    console.log(token);
    //       logout(token);
    //       dispatch(logAct(false));
    //       dispatch(tokenAct(''));
    //       toast.success('You are logged out.');
    //       navigate('/login');
  };
  return (
    <>
      <Container>
        {!true ? (
          <ContainerToCenter>
            <TextStyled>BR</TextStyled>
          </ContainerToCenter>
        ) : (
          <ContainerNotCenter>
            <TextStyled>BR</TextStyled>
            <HideMobileContainer>
              <UserIcon />
            </HideMobileContainer>
            <div style={{ display: 'flex' }}>
              <NavigateIcon />
              <ShowMobilecontainer>
                <UserIcon />
              </ShowMobilecontainer>
              <ButtonStyled type="button" onClick={() => logoutUser('logout')}>
                Logout
              </ButtonStyled>
            </div>
          </ContainerNotCenter>
        )}
      </Container>
      <Outlet />
    </>
  );
}

export default Header;
