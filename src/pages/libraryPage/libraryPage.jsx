import LibraryModal from '../../components/LibraryModal/LibraryModal';
import LibraryList from '../../components/LibraryList/LibraryList';
import LibraryForm from '../../components/LibraryForm/LibraryForm';
const LibraryPage = () => {
  return (
    <div>
      <LibraryForm />
      {/* <LibraryModal /> */}
      <LibraryList />
    </div>
  );
  // return null;
};

export default LibraryPage;
