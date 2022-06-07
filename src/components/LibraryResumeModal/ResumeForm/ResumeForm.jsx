import { useState } from 'react';
import { Input, Label } from './ResumeForm.styled';

const ResumeForm = ({ updateResume }) => {
  const [resume, setResume] = useState('');

  const handleChange = e => {
    setResume(e.target.value);
    updateResume(e.target.value);
  };

  return (
    <Label>
      <Input
        type="text"
        placeholder="..."
        value={resume}
        minLength={1}
        maxLength={200}
        onChange={e => handleChange(e)}
      />
    </Label>
  );
};

export default ResumeForm;
