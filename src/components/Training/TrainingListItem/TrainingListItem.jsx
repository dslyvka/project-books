import Icons from '../../../images/sprite/sprites.svg';
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
        {/* <DeleteIconStyled /> */}
        <DeleteIconStyled width="14px" height="18px">
          <use xlinkHref={`${Icons}#icon-delete`} />
        </DeleteIconStyled>
      </DeleteButton>
    </TrainingListItemStyled>
  );
};

export default TrainingListItem;
