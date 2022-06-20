// import Icons from '../../../images/sprite/sprites.svg';
import { ReactComponent as DeleteIcon } from '../../../images/icons/training/deleteIcon.svg';
import {
  TrainingListItemStyled,
  BookIconStyled,
  TrainingListItemTitle,
  TrainingListItemAuthor,
  TrainingListItemYear,
  TrainingListItemPages,
  DeleteButton,
  TrainingListItemHead,
} from './TrainingListItem.styled';
import { useSelector, useDispatch } from 'react-redux';
import trainingActions from '../../../redux/training/trainingActions';

const { deleteBook } = trainingActions;

const TrainingListItem = ({
  title,
  author,
  year,
  pages,
  id,
  index,
  placeholder,
  status,
}) => {
  const dispatch = useDispatch();
  const isStarted = useSelector(state => state.training.isStarted);
  return (
    <TrainingListItemStyled>
      <BookIconStyled fill={status === 'already' ? '#FF6B08' : '#B1B5C2'} />
      <TrainingListItemTitle>{title}</TrainingListItemTitle>
      <TrainingListItemAuthor>
        <TrainingListItemHead>Автор:</TrainingListItemHead>
        {author}
      </TrainingListItemAuthor>
      <TrainingListItemYear>
        <TrainingListItemHead>Рік:</TrainingListItemHead>
        {year}
      </TrainingListItemYear>
      <TrainingListItemPages>
        <TrainingListItemHead>Стор.:</TrainingListItemHead>
        {pages}
      </TrainingListItemPages>

      {!isStarted && !placeholder && (
        <DeleteButton
          type="button"
          onClick={() =>
            dispatch(deleteBook({ title, author, year, pages, id }))
          }
        >
          <DeleteIcon />
        </DeleteButton>
      )}
    </TrainingListItemStyled>
  );
};

export default TrainingListItem;
