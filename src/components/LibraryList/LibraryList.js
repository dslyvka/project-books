import ListAlreadyRead from './ListOther/ListAlreadyRead';
import ListOther from './ListOther/ListOther';
import { fetchBooks, addBooks } from '../../redux/books/books-operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Div } from './LibraryList.styled';
import { getBooks } from '../../redux/books/books-selector';

const example = [
  {
    title: 'harry Poterккккккккккккккккккк',
    author: 'royling',
    year: 1113,
    pages: 100,
    rating: 4,
    status: 'already',
  },
  {
    title:
      'harry Poteraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    author: 'Джефф Сазерленд',
    year: 13333,
    raiting: 5,
    pages: 4100,
    status: 'reading',
  },
  {
    title: 'harry Poter',
    author: 'roywwwwling',
    year: 3,
    rating: 1112,
    pages: 99,
    status: 'reading',
  },
  {
    title: 'harry Poter',
    author: 'royling',
    year: 3,
    pages: 100,
    rating: 2,
    status: 'going',
  },
  {
    title: 'harry Poter',
    author: 'royling',
    year: 3,
    pages: 100,
    rating: 2,
    status: 'already',
  },
  {
    title: 'harry Poter',
    author: 'roylingaaaaaaaaadddddddddd',
    year: 3,
    pages: 100,
    rating: 2,
    status: 'going',
  },
];

function LibraryList() {
  const dispatch = useDispatch();
  const onContacts = useSelector(getBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const reading = example.filter(arr => arr.status === 'reading');
  const going = example.filter(arr => arr.status === 'going');
  const already = example.filter(arr => arr.status === 'already');

  return (
    <Div>
      <ListAlreadyRead text="Прочитано" array={already} />
      <ListOther text="Читаю" array={reading} />
      <ListOther text="Маю намір прочитати" array={going} />
    </Div>
  );
}

export default LibraryList;
