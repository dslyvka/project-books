import Container from '../../components/Container/Container';
import TrainingWrapper from '../../components/Training/TraningWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import trainingActions from '../../redux/training/trainingActions';

import { PageAnimation } from '../../components/PageAnimation/PageAnimation';

import StartTrainingBtn from '../../components/StartTrainingBtn/StartTrainingBtn';

const TrainingPage = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    !isLoggedIn && navigate((location.pathname = '/login'));
  });
  useEffect(() => {
    dispatch(trainingActions.getCurrTraining());
  }, [dispatch]);

  return (
    isLoggedIn && (
      <PageAnimation>
        <Container>
          <TrainingWrapper />
          {/* <StartTrainingBtn /> */}
        </Container>
      </PageAnimation>
    )
  );
};

export default TrainingPage;