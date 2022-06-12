import Container from '../../components/Container/Container';
import TrainingWrapper from '../../components/Training/TraningWrapper';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import StartTrainingBtn from '../../components/StartTrainingBtn/StartTrainingBtn';

const TrainingPage = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    !isLoggedIn && navigate((location.pathname = '/login'));
  });

  return (
    isLoggedIn && (
      <Container>
        <TrainingWrapper />
        <StartTrainingBtn />
      </Container>
    )
  );
};

export default TrainingPage;
