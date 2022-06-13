import LibraryIcon from '../LibraryIcon/LibraryIcon';
import {
  DivContainer,
  Div,
  Ulalready,
  UlTablet,
  UL,
  LiTablet,
  Li,
  LiTitle,
  LiData,
  LiNameBook,
  Button,
} from './ListAlreadyRead.styled';
// import ResumeButton from '../ResumeButton/ResumeButton';
import { Outlet, useNavigate } from 'react-router-dom';
// import LibraryResumeModal from '../../LibraryResumeModal/Resume/Resume';
// import { useToggle } from '../../../hooks/useToggle';
import Rate from '../../LibraryResumeModal/Rate/Rate';

function ListAlreadyRead({ text = 'Text', array = [] }) {
  const navigate = useNavigate();
  // const { isOpen, open, close } = useToggle();

  return (
    <DivContainer margin="80px">
      {/* {isOpen && <LibraryResumeModal closer={{ close }} />} */}
      {array.length !== 0 && (
        <Div>
          <h2>{text}</h2>
          <UL>
            <UlTablet>
              <LiTablet>Навза книги</LiTablet>
              <LiTablet>Автор</LiTablet>
              <LiTablet>Рік</LiTablet>
              <LiTablet>Стор</LiTablet>
              <LiTablet>Рейтинг</LiTablet>
              <LiTablet></LiTablet>
            </UlTablet>

            {array.map(
              ({ _id, title, author, year, pages, rating = 0, status }) => (
                <Li key={_id}>
                  <Ulalready>
                    <li>{<LibraryIcon book={status} />}</li>
                    <LiNameBook>{title}</LiNameBook>
                  </Ulalready>
                  <Ulalready>
                    <LiTitle>Автор</LiTitle>
                    <LiData width="40px">{author}</LiData>
                  </Ulalready>
                  <Ulalready>
                    <LiTitle>Рік</LiTitle>
                    <LiData width="63px">{year}</LiData>
                  </Ulalready>
                  <Ulalready>
                    <LiTitle>Стор</LiTitle>
                    <LiData width="49px"> {pages}</LiData>
                  </Ulalready>
                  <Ulalready>
                    <LiTitle>Рейтинг</LiTitle>
                    <LiData width="20px">
                      <Rate init={rating} read={true} />
                    </LiData>
                  </Ulalready>
                  <Ulalready>
                    <li>
                      <Button onClick={() => navigate(_id)}>Резюме</Button>
                    </li>
                  </Ulalready>
                </Li>
              ),
            )}
          </UL>
        </Div>
      )}
      <Outlet />
    </DivContainer>
  );
}

export default ListAlreadyRead;
