import ListAlreadyRead from './ListAlreadyRead/ListAlreadyRead';
import ListOther from './ListOther/ListOther';

import { Div } from './LibraryList.styled';

const example = [
  {
    title: 'harry Poterккккккккккккккккккк',
    author: 'royling',
    year: 1113,
    pages: 100,
    raiting: 4,
    read: 'already',
  },
  {
    title:
      'harry Poteraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    author: 'Джефф Сазерленд',
    year: 13333,
    raiting: 5,
    pages: 4100,
    read: 'reading',
  },
  {
    title: 'harry Poter',
    author: 'roywwwwling',
    year: 3,
    raiting: 1112,
    pages: 99,
    read: 'reading',
  },
  {
    title: 'harry Poter',
    author: 'royling',
    year: 3,
    pages: 100,
    raiting: 2,
    read: 'going',
  },
  {
    title: 'harry Poter',
    author: 'royling',
    year: 3,
    pages: 100,
    raiting: 2,
    read: 'already',
  },
  {
    title: 'harry Poter',
    author: 'roylingaaaaaaaaadddddddddd',
    year: 3,
    pages: 100,
    raiting: 2,
    read: 'going',
  },
];

function LibraryList() {
  const reading = example.filter(arr => arr.read === 'reading');
  const going = example.filter(arr => arr.read === 'going');

  return (
    <Div>
      <ListAlreadyRead text="Going to read" array={example} />
      <ListOther text="Reading now" array={reading} />
      <ListOther text="Going to read " array={going} />
    </Div>
  );
}

export default LibraryList;
