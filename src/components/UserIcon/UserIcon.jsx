import { useEffect, useState } from 'react';
import { TextStyled, UserContainer, NameStuled } from './UserIcon.styled';

function UserIcon() {
  const user = {
    name: 'Taras Bulba',
    avatar: null,
  };
  const [userInit, setUserInit] = useState('');
  useEffect(() => {
    const arr = user.name.trim().split(' ');

    let initTitle = '';
    arr.forEach(el => {
      initTitle += el.charAt(0).toUpperCase();
    });
    // console.log(initTitle);
    setUserInit(initTitle);

    // setUserInit(user.name.trim().charAt(0).toUpperCase());
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
