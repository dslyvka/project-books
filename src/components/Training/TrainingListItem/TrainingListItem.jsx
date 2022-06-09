import { ReactComponent as BookIcon } from '../../../images/icons/training/bookIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../images/icons/training/deleteIcon.svg';

import {
  TrainingListItemStyled,
  BookIconStyled,
  TrainingListItemTitle,
  TrainingListItemAuthor,
  TrainingListItemYear,
  TrainingListItemPages,
  DeleteIconStyled,
  DeleteButton,
} from './TrainingListItem.styled';

const TrainingListItem = () => {
  return (
    <TrainingListItemStyled>
      <BookIconStyled />
      <TrainingListItemTitle>...</TrainingListItemTitle>
      <TrainingListItemAuthor>...</TrainingListItemAuthor>
      <TrainingListItemYear>...</TrainingListItemYear>
      <TrainingListItemPages>...</TrainingListItemPages>
      <DeleteButton>
        <DeleteIconStyled />
      </DeleteButton>
    </TrainingListItemStyled>
  );
};

export default TrainingListItem;
