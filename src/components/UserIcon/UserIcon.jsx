import { useEffect, useState } from 'react';
import { TextStyled, UserContainer, NameStuled } from './UserIcon.styled';
import { useSelector } from 'react-redux';

function UserIcon() {
  const { user } = useSelector(state => state.auth);
  const [userInit, setUserInit] = useState('');

  useEffect(() => {
    const arr = user.name.trim().split(' ');

    let initTitle = '';

    arr.forEach(el => {
      initTitle += el.charAt(0).toUpperCase();
    });
    setUserInit(initTitle.slice(0, 2));
  }, [user]);

  return (
    <>
      <UserContainer>
        <TextStyled>{userInit}</TextStyled>
      </UserContainer>
      <NameStuled>{user.name}</NameStuled>
    </>
  );
}

export default UserIcon;
