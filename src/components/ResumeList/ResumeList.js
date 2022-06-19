import { fetchBooks } from '../../redux/books/books-operations';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findBook, getLoading } from '../../redux/books/books-selector';
import { Link } from 'react-router-dom';
import Rate from '../LibraryResumeModal/Rate/Rate';
import Filter from './Filter/Filter';
import { useToggle } from '../../hooks/useToggle';
import sprite from '../../images/sprite/sprites.svg';
import LibraryResumeModal from '../LibraryResumeModal/LibraryResumeModal/LibraryResumeModal';
import {
  Div,
  Ul,
  Li,
  LiResume,
  DivResult,
  H2,
  DivUl,
  DivButton,
  Button,
  DivRate,
  P,
  Svg,
  ButtonSvg,
} from './ResumeList.styled';

function ResumeList() {
  const [id, setId] = useState();
  const { isOpen, open, close } = useToggle();
  const handleOpen = e => {
    setId(e.currentTarget.id);
    open();
  };

  // const { reading = [], going = [], already = [] } = useSelector(getBooks);
  const filterBook = useSelector(findBook);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();
  // const resume = filterBook.filter(book => book.review !== null);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Div>
      <H2>Мої Резюме</H2>
      <Filter />
      <DivUl>
        {loading === false && filterBook.length === 0 && (
          <P>Нема такої книжки</P>
        )}
        {filterBook.map(({ _id, review, title, rating }) => (
          <Ul key={_id}>
            {isOpen && <LibraryResumeModal closer={close} id={id} />}
            <div>
              <Li color="#898F9F">Назва книги</Li>
              <Li color="#898F9F">Рейтинг</Li>
              <Li color="#898F9F">Резюме</Li>
              <Li>
                <ButtonSvg onClick={e => handleOpen(e)} id={_id}>
                  <Svg width="20" height="20">
                    <use href={`${sprite}#redactor`}></use>
                  </Svg>
                </ButtonSvg>
              </Li>
            </div>
            <DivResult>
              <Li>{title}</Li>

              <DivRate>
                <Rate init={rating} read={true} />
              </DivRate>

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
