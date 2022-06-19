import TrainingListItem from '../TrainingListItem/TrainingListItem';
import Responsive from 'react-responsive';

import {
  TrainingListContainer,
  TrainingListHeader,
  TrainingListHeaderBookTitle,
  TrainingListHeaderBookAuthor,
  TrainingListHeaderBookYear,
  TrainingListHeaderBookPages,
  TrainingListStyled,
  TrainingListEmpty,
  TrainingListEmptyItem,
  TrainingListEmptyItemTitle,
  BookIconEmptyStyled,
} from './TrainingList.styled';

import {
  TrainingListItemStyled,
  BookIconStyled,
  TrainingListItemTitle,
  TrainingListItemAuthor,
  TrainingListItemYear,
  TrainingListItemPages,
} from '../TrainingListItem/TrainingListItem.styled';

import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
const placeholder = (
  // <TrainingListItem
  //   title="..."
  //   author="..."
  //   year="..."
  //   pages="..."
  //   placeholder
  // />
  <>
    <TrainingListEmptyItemTitle>
      <BookIconEmptyStyled fill="#B1B5C2" />
      ...
    </TrainingListEmptyItemTitle>
    <TrainingListEmpty>
      <TrainingListEmptyItem>Автор:</TrainingListEmptyItem>
      <TrainingListEmptyItem>Рік:</TrainingListEmptyItem>
      <TrainingListEmptyItem>Стор.:</TrainingListEmptyItem>
    </TrainingListEmpty>
  </>
);

const TrainingList = () => {
  const books = useSelector(state => state.training.books);
  const Mobile = props => <Responsive {...props} maxWidth={767} />;

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
        {books.length
          ? books.map((book, index) => (
              <TrainingListItem
                author={book.author}
                title={book.title}
                year={book.year}
                pages={book.pages}
                key={uuidv4()}
                id={book.id}
                index={index}
                status={book.status}
              />
            ))
          : placeholder}
      </TrainingListStyled>
    </TrainingListContainer>
  );

  // <TrainingListItem />;
};
export default TrainingList;
