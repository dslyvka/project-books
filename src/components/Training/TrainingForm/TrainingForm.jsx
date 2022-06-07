import DatePickerInput from '../DatePicker/DatePicker';
import {
  FormContainer,
  FormTitle,
  CalendarsContainer,
} from './TrainingForm.styled';

const TrainingForm = () => {
  return (
    <FormContainer>
      <FormTitle>Моє тренування </FormTitle>
      <CalendarsContainer>
        <DatePickerInput />
        <DatePickerInput />
      </CalendarsContainer>
    </FormContainer>
  );
};

export default TrainingForm;
