import React from 'react';
import { ModalButton, PlusIcon } from './LibraryButtonModal.styled';

const LibraryOpenModalButton = ({ openModal }) => {
  return (
    <ModalButton onClick={openModal}>
      <PlusIcon fontSize="32" />
    </ModalButton>
  );
};

export default LibraryOpenModalButton;
