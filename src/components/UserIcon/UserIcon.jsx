import { useEffect, useState } from 'react';
import { TextStyled, UserContainer, NameStuled } from './UserIcon.styled';

function UserIcon() {
  const user = {
    name: 'Taras bulba',
    avatar: null,
  };
  const [userInit, setUserInit] = useState('');
  useEffect(() => {
    setUserInit(user.name.trim().charAt(0).toUpperCase());
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
