import LibraryModal from '../../components/LibraryModal/LibraryModal';
import LibraryList from '../../components/LibraryList/LibraryList';
import LibraryForm from '../../components/LibraryForm/LibraryForm';
import { useWindowWidth } from '@react-hook/window-size';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PageAnimation } from '../../components/PageAnimation/PageAnimation';
import { getBooks } from '../../redux/books/books-selector';
import { Div} from './LibraryPage.styled';
import LibraryOpenModalButton from '../../components/LibraryList/LibraryButtonModal/LibraryButtonModal'
import LibraryModalForm from '../../components/LibraryList/LibraryModalForm/LibraryModalForm';
import { useState } from 'react';


const LibraryPage = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  const width = useWindowWidth();
  const [isLibraryFormShow, setIsLibraryFormShow] = useState(false)

  const openModal = () => {
    setIsLibraryFormShow(!isLibraryFormShow) 
  }

  const navigate = useNavigate();
  const location = useLocation();

  const { reading, going, already } = useSelector(getBooks);
  const books = [reading, going, already].flat();

  useEffect(() => {
    !isLoggedIn && navigate((location.pathname = '/login'));
  });

  return (
    isLoggedIn && (
      <PageAnimation>
        <Div>

            {!sessionStorage.getItem('firstVisit') && books.length === 0 && (
            <LibraryModal />
          )}
          {width < 768 ?
            <>        <LibraryModalForm
          isTrainingModalShown={isLibraryFormShow}
          setTrainingModalShown={setIsLibraryFormShow}
        />
              <LibraryOpenModalButton openModal={openModal} />   
              <LibraryList />
            </> :
            <>
              <LibraryForm/>
              <LibraryList />
            </>}
        </Div>
      </PageAnimation>
    )
  );
};

export default LibraryPage;
