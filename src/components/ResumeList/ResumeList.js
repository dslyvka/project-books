import { fetchBooks } from '../../redux/books/books-operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../redux/books/books-selector';
import { Link } from 'react-router-dom';
import Rate from '../LibraryResumeModal/Rate/Rate';
import {
  Div,
  Ul,
  Li,
  LiResume,
  DivResult,
  H2,
  DivTitle,
  DivUl,
  DivButton,
  Button,
  DivRate,
} from './ResumeList.styled';

function ResumeList() {
  const { reading = [], going = [], already = [] } = useSelector(getBooks);
  const dispatch = useDispatch();
  const resume = already.filter(book => book.review !== null);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Div>
      <H2>Мої Резюме</H2>
      <DivUl>
        {resume.map(({ _id, review, title, rating }) => (
          <Ul key={_id}>
            <div>
              <Li color="#898F9F">Назва книги</Li>
              <Li color="#898F9F">Рейтинг</Li>
              <Li color="#898F9F">Резюме</Li>
            </div>
            <DivResult>
              <Li>{title}</Li>
              {rating > 0.9 ? (
                <DivRate>
                  <Rate init={rating} read={true} />
                </DivRate>
              ) : (
                <Li>0</Li>
              )}
              <LiResume>{review}</LiResume>
            </DivResult>
          </Ul>
        ))}
      </DivUl>
      <DivButton>
        <Link to="/library" className="button">
          <Button type="button" color="#FFFFFF" backgroundColor="#FF6B08">
            Бібліотека
          </Button>
        </Link>
      </DivButton>
    </Div>
  );
}

export default ResumeList;
