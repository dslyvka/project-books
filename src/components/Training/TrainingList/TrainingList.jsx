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

import { useSelector } from 'react-redux';

const TrainingList = () => {
  const books = useSelector(state => state.training.books);
  return (
    <TrainingListContainer>
      <TrainingListHeader>
        <TrainingListHeaderBookTitle>Назва книги</TrainingListHeaderBookTitle>
        <TrainingListHeaderBookAuthor>Автор</TrainingListHeaderBookAuthor>
        <TrainingListHeaderBookYear>Рік</TrainingListHeaderBookYear>
        <TrainingListHeaderBookPages>Стор.</TrainingListHeaderBookPages>
      </TrainingListHeader>
      <TrainingListStyled>
        {/* <TrainingListItem /> */}
        {books.map(book => (
          <TrainingListItem
            author={book.author}
            title={book.title}
            year={book.year}
            pages={book.pages}
            key={book.id}
          />
        ))}
      </TrainingListStyled>
    </TrainingListContainer>
  );

  // <TrainingListItem />;
};
export default TrainingList;
