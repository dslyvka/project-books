import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import trainingOperations from '../../redux/training/trainingActions1';
// import trainingSelectors from '../../redux/training/trainingSelectors';
import ButtonStyled from './StartTrainingBtn.styled';

// console.log(trainingSelectors);

const StartTrainingBtn = () => {
  const books = useSelector(state => state.training.booksRequest);
  const startDate = useSelector(state => state.training.startDate);
  const endDate = useSelector(state => state.training.endDate);

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

  return books.length ? (
    <ButtonStyled type="button" onClick={handleClick}>
      Почати тренування
    </ButtonStyled>
  ) : (
    <></>
  );
};

export default StartTrainingBtn;
