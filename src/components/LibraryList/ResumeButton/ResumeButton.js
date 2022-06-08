import { useState } from 'react';
import { Button } from './Resume.styled';

function ResumeButton() {
  const [showModal, setShowModal] = useState(false);
  const togleModal = () => {
    setShowModal(showModal => !showModal);
  };
  return <Button onClick={() => togleModal()}>Резюме</Button>;
}

export default ResumeButton;
