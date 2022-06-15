import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import trainingOperations from '../../redux/training/trainingActions';
// import trainingSelectors from '../../redux/training/trainingSelectors';
import ButtonStyled from './StartTrainingBtn.styled';

// console.log(trainingSelectors);

const StartTrainingBtn = () => {
  const books = useSelector(state => state.training.booksRequest);
  const startDate = useSelector(state => state.training.startDate);
  const endDate = useSelector(state => state.training.endDate);
  const isStarted = useSelector(state => state.training.isStarted);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      trainingOperations.startTraining({
        startDate,
        endDate,
        books,
      }),
    );
  };

  return books.length && startDate && startDate && !isStarted ? (
    <ButtonStyled type="button" onClick={handleClick}>
      Почати тренування
    </ButtonStyled>
  ) : (
    <></>
  );
};

export default StartTrainingBtn;
