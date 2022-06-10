import ListAlreadyRead from './ListOther/ListAlreadyRead';
import ListOther from './ListOther/ListOther';
import { fetchBooks } from '../../redux/books/books-operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { ButtonStyled } from '../RegularButton/Button.styled';
import { Div, DivButton, Button } from './LibraryList.styled';
import { getBooks } from '../../redux/books/books-selector';

// const example = [
//   {
//     title: 'harry Poterккккккккккккккккккк',
//     author: 'royling',
//     year: 1113,
//     pages: 100,
//     rating: 4,
//     status: 'already',
//     id: '12345',
//   },
//   {
//     title:
//       'harry Poteraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     author: 'Джефф Сазерленд',
//     year: 13333,
//     raiting: 5,
//     pages: 4100,
//     status: 'reading',
//     id: '123456',
//   },
//   {
//     title: 'harry Poter',
//     author: 'roywwwwling',
//     year: 3,
//     rating: 1112,
//     pages: 99,
//     status: 'reading',
//     id: '123457',
//   },
//   {
//     title: 'harry Poter',
//     author: 'royling',
//     year: 3,
//     pages: 100,
//     rating: 2,
//     status: 'going',
//     id: '123458',
//   },
//   {
//     title: 'harry Poter',
//     author: 'royling',
//     year: 3,
//     pages: 100,
//     rating: 2,
//     status: 'already',
//     id: '123459',
//   },
//   {
//     title: 'harry Poter',
//     author: 'roylingaaaaaaaaadddddddddd',
//     year: 3,
//     pages: 100,
//     rating: 2,
//     status: 'going',
//     id: '123461',
//   },
// ];

function LibraryList() {
  const dispatch = useDispatch();
  const onContacts = useSelector(getBooks);
  console.log(onContacts);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // const reading = example.filter(arr => arr.status === 'reading');
  const reading = onContacts.reading;
  // const going = onContacts.filter(arr => arr.status === 'going');
  const going = onContacts.going;
  // const already = example.filter(arr => arr.status === 'already');
  const already = onContacts.already;
  return (
    <Div>
      <ListAlreadyRead text="Прочитано" array={already} />
      <ListOther text="Читаю" array={reading} />
      <ListOther text="Маю намір прочитати" array={going} />
      <DivButton>
        <Button type="button" color="#FFFFFF" backgroundColor="#FF6B08">
          Моє тренування
        </Button>
      </DivButton>
    </Div>
  );
}

export default LibraryList;
