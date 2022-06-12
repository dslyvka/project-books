import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import trainingOperations from '../../redux/training/trainingOperations'
import trainingSelectors from '../../redux/training/trainingSelectors'
import ButtonStyled from './StartTrainingBtn.styled'

console.log(trainingSelectors);

const StartTrainingBtn = () => {

    const startDate = useSelector(state => state.training.startDate)
  const finishDate = useSelector(state => state.training.endDate)
  const books = useSelector(state => state.training.books)

  const dispatch = useDispatch()

  const handleClick = () => {dispatch(
            trainingOperations.getCurrTraining({
                startDate,
                finishDate,
                books,
            }),
  );
    
  }

  return (
    <ButtonStyled type="button" onClick={handleClick}  >
         Почати тренування
    </ButtonStyled>
  )
}

export default StartTrainingBtn
