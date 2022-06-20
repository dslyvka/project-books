import Container from '../../components/Container/Container';
import TrainingWrapper from '../../components/Training/TraningWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import trainingActions from '../../redux/training/trainingActions';
import actions from '../../redux/auth/auth-actions';

import { PageAnimation } from '../../components/PageAnimation/PageAnimation';

import StartTrainingBtn from '../../components/StartTrainingBtn/StartTrainingBtn';

const TrainingPage = () => {
  // const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  const { isLoggedIn, token } = useSelector(state => state.auth);

  useLayoutEffect(() => {
    if (!isLoggedIn && token) {
      dispatch(actions.fetchCurrentUser());
    }
  }, [dispatch, isLoggedIn, token]);

  useEffect(() => {
    // dispatch(actions.fetchCurrentUser())
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
