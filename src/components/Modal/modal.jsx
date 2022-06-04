import { useEffect } from 'react';
import { ModalWrapper } from './Modal.styled';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
    };
  });

  const close = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') onClose();
  };

  return (
    <ModalWrapper onClick={close}>
      <div>{children}</div>
    </ModalWrapper>
  );
};

export default Modal;
