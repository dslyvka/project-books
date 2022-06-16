import { useState } from 'react';
import { useSelector } from 'react-redux';
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
import Modal from '../Modal/Modal';
import UserIcon from '../UserIcon/UserIcon';
import NavigateIcon from '../NavigateIcon/NavigateIcon';
import Logout from '../Logout/Logout';

function Header() {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn } = useSelector(state => state.auth);

  const togleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <>
      <Container>
        {!isLoggedIn ? (
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
              <ButtonStyled type="button" onClick={() => togleModal()}>
                Вихід
              </ButtonStyled>
            </div>
            {showModal && (
              <Modal onClose={togleModal}>
                <Logout onClose={togleModal} />
              </Modal>
            )}
          </ContainerNotCenter>
        )}
      </Container>
      <Outlet />
    </>
  );
}

export default Header;
