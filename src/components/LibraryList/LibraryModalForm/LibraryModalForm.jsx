import React from 'react';
import LibraryForm from '../../LibraryForm/LibraryForm';
import { ModalBackdrop, ModalWrapper, GoBack } from './LibraryModalForm.styled';

const LibraryModalForm = ({ isTrainingModalShown, setTrainingModalShown }) => {
  return (
    <>
      {isTrainingModalShown && (
        <ModalBackdrop>
          <ModalWrapper>
            <GoBack
              fontSize="32"
              aria-label="do back butoon"
              onClick={() => setTrainingModalShown(!isTrainingModalShown)}
            />
            <LibraryForm />
          </ModalWrapper>
        </ModalBackdrop>
      )}
    </>
  );
};

export default LibraryModalForm;
