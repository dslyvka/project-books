import LibraryModal from '../../components/LibraryModal/LibraryModal';
import LibraryList from '../../components/LibraryList/LibraryList';
import LibraryForm from '../../components/LibraryForm/LibraryForm';
import { useSelector } from 'react-redux';

const LibraryPage = () => {
  const { items } = useSelector(state => state.books);
  return (
    <div>
      <LibraryForm />
      {items.length === 0 && <LibraryModal />}
      <LibraryList />
    </div>
  );
};

export default LibraryPage;
