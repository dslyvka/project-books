import { Container } from './Logout.styled';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

function Logout() {
  const user = {
    name: 'Taras Bulba',
    avatar: null,
  };

  return (
    <Container>
      <p>
        <h3>Шановний {user.name}!</h3>
        Ви дійсно хочете здійснити вихід з особистого кабінету?
      </p>
      <ButtonAdd />
      <ButtonAdd />
    </Container>
  );
}

export default Logout;
