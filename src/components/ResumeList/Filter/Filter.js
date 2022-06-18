import { Div, DivInput, Input, Label } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { booksSelectors } from '../../../redux/books/';
import {
  changeFilterTitle,
  changeFilterRating,
} from '../../../redux/books/books-actions';

function Filter() {
  const { getFilterRating } = booksSelectors;
  const valueFilterRating = useSelector(getFilterRating);
  const { getFilterTitle } = booksSelectors;
  const valueFilterTitle = useSelector(getFilterTitle);
  const dispatch = useDispatch();
  return (
    <Div>
      <DivInput>
        <Label>Введіть назву книги</Label>
        <Input
          type="text"
          value={valueFilterTitle}
          onChange={e => dispatch(changeFilterTitle(e.target.value))}
          placeholder="Ім'я книги"
        ></Input>
      </DivInput>
      <DivInput>
        <Label>Рейтинг</Label>
        <Input
          type="text"
          value={valueFilterRating}
          onChange={e => dispatch(changeFilterRating(e.target.value))}
          placeholder="рейтинг"
          pattern="/^[^-\s=]([0-9])/"
        ></Input>
      </DivInput>
    </Div>
  );
}

export default Filter;
