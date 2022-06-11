import BookSelector from '../BookSelector/BookSelector';
import DatePickerInput from '../DatePicker/DatePicker';
// import TrainingList from '../TrainingList/TrainingList';
import {
  FormContainer,
  FormTitle,
  CalendarsContainer,
  SelectAndButtonContainer,
  SelectContainer,
  FormAddButton,
} from './TrainingForm.styled';

const TrainingForm = () => {
  return (
    <>
      <FormContainer>
        <FormTitle>Моє тренування </FormTitle>
        <CalendarsContainer>
          <DatePickerInput />
          <DatePickerInput />
        </CalendarsContainer>
        <SelectAndButtonContainer>
          <SelectContainer>
            <BookSelector />
          </SelectContainer>
          <FormAddButton type="submit">Додати</FormAddButton>
        </SelectAndButtonContainer>
      </FormContainer>
      {/* <TrainingList /> */}
    </>
  );
};

export default TrainingForm;
