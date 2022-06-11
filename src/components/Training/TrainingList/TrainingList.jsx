import TrainingListItem from '../TrainingListItem/TrainingListItem';
import {
  TrainingListContainer,
  TrainingListHeader,
  TrainingListHeaderBookTitle,
  TrainingListHeaderBookAuthor,
  TrainingListHeaderBookYear,
  TrainingListHeaderBookPages,
  TrainingListStyled,
} from './TrainingList.styled';
const TrainingList = () => {
  return (
    <TrainingListContainer>
      <TrainingListHeader>
        <TrainingListHeaderBookTitle>Назва книги</TrainingListHeaderBookTitle>
        <TrainingListHeaderBookAuthor>Автор</TrainingListHeaderBookAuthor>
        <TrainingListHeaderBookYear>Рік</TrainingListHeaderBookYear>
        <TrainingListHeaderBookPages>Стор.</TrainingListHeaderBookPages>
      </TrainingListHeader>
      <TrainingListStyled>
        <TrainingListItem />
      </TrainingListStyled>
    </TrainingListContainer>
  );

  // <TrainingListItem />;
};
export default TrainingList;
