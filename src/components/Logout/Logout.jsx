import { Container, UserTitle, Title } from './Logout.styled';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

function Logout({ onClose }) {
  const user = {
    name: 'Taras Bulba',
    avatar: null,
  };
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
  // const close = e => {
  //   console.log('close');
  //   if (e.target === e.currentTarget) {
  //     onClose();
  //   }
  // };
  return (
    <Container>
      <UserTitle>{user.name}!</UserTitle>

      <Title>
        Якщо вивийдетез програми, не збереженні дані будуть втрачені
      </Title>

      <button type="button" onClick={onClose}>
        out
      </button>
      <ButtonAdd action={onClose} />
    </Container>
  );
}

export default Logout;
