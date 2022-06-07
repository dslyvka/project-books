import Modal from '../../Modal/Modal';
import ResumeForm from '../ResumeForm/ResumeForm';
import { Button } from './Resume.styled';
import { useSvg } from '../../../hooks/useSvg';
import { useState } from 'react';
import Rate from '../Rate/Rate';
import { ModalContainer, ButtonWrapper, Title } from './Resume.styled';

export const LibraryResumeModal = ({ closer }) => {
  const [rate, setRate] = useState(0);
  const [resume, setResume] = useState('');

  const { close } = closer;

  const updateRate = val => {
    setRate(val);
  };

  const updateResume = val => {
    setResume(val);
  };

  const getData = () => {
    if (!rate || resume === '') {
      return null;
    }
    //Отправляем данные на бек и обнуляем , закрываем
    console.log(rate, resume);
    setRate(0);
    setResume('');
    close();
  };

  return (
    <Modal onClose={close}>
      <ModalContainer>
        <Title>Обрати рейтинг книги</Title>
        <Rate
          emptyIcon={useSvg('icon-Star', 17, 17)}
          fullIcon={useSvg('icon-Star-full', 17, 17)}
          update={updateRate}
        />
        <Title>Резюме</Title>
        <ResumeForm updateResume={updateResume} />
        <ButtonWrapper>
          <Button onClick={close}>Назад</Button>
          <Button type="submit" onClick={getData}>
            Зберегти
          </Button>
        </ButtonWrapper>
      </ModalContainer>
    </Modal>
  );
};

export default LibraryResumeModal;

//////////////////////////////////////////////////////////////////////
// УСТАНОВИТЬ   npm i react-simple-star-rating
/////////////////////////////////////////////////////////////////////

// import Modal from '../../components/Modal/Modal';
// import LibraryResumeModal from '../../components/LibraryResumeModal/Resume/Resume';
// import { useToggle } from '../../hooks/useToggle';

// //к кнопке RESUME подключить onClick=open

// const LibraryPage = () => {
//   const { isOpen, open, close } = useToggle();
//   return (
//     <>
//       <button onClick={open}>Resume!</button>

//       {/* Открытие модального окна при нажатии на RESUME       */}
//       {isOpen && <LibraryResumeModal closer={{ close }} />}
//     </>
//   );
// };

// export default LibraryPage;
