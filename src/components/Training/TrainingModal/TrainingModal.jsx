import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import TrainingForm from '../TrainingForm/TrainingForm';
import { ModalBackdrop, ModalWrapper, GoBack } from './TrainingModal.styled';

const TrainingModal = ({ isTrainingModalShown, setTrainingModalShown }) => {
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
            <TrainingForm />
          </ModalWrapper>
        </ModalBackdrop>
      )}
    </>
  );
};

export default TrainingModal;
