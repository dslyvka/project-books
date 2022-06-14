import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';
import trainingActions from '../../../redux/training/trainingActions';
// import trainingSelectors from '../../../redux/training/trainingSelectors';
import trainingFormSchema from '../../../validation/training';
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
  ErrorMessage,
} from './TrainingForm.styled';

const TrainingForm = () => {
  const start = useSelector(state => state.training.startDate);
  const end = useSelector(state => state.training.endDate);
  // const selectedBooks = useSelector(trainingSelectors.getSelectBooks);
  const defaultValue = '';

  const { addBook, addDate } = trainingActions;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      start: start ? start : '',
      end: end ? end : '',
      book: {},
    },
    validationSchema: trainingFormSchema,
    onSubmit: values => {
      // if (selectedBooks.some(book => book._id === values.book._id)) {
      //   return;
      // }
      // dispatch(trainingActions.addSelectedId(values.book._id));
      dispatch(addBook(values.book));
      console.log(values);
    },
  });

  const handleStartDate = date => {
    const start = moment(date).format('YYYY-MM-DD');
    formik.setFieldValue('start', start);
    // dispatch(trainingActions.trainingStartDate(start));
  };

  const handleEndDate = date => {
    const end = moment(date).format('YYYY-MM-DD');
    formik.setFieldValue('end', end);
    // dispatch(trainingActions.trainingEndDate(end));
  };

  const handleBook = value => {
    formik.setFieldValue('book', value);
  };

  return (
    <>
      <FormContainer onSubmit={formik.handleSubmit} autoComplete="off">
        <FormTitle>Моє тренування </FormTitle>
        <CalendarsContainer>
          <DatePickerInput
            value={formik.values.start}
            placeholderText="Початок"
            onChange={handleStartDate}
            pickedDate={start ? new Date(start) : ''}
          />
          {/* {formik.touched.start && formik.errors.start ? (
            <ErrorMessage>{formik.errors.start}</ErrorMessage>
          ) : null} */}
          <DatePickerInput
            value={formik.values.end}
            placeholderText="Кінець"
            onChange={handleEndDate}
            pickedDate={end ? new Date(end) : ''}
          />
          {/* {formik.touched.end && formik.errors.end ? (
            <ErrorMessage>{formik.errors.end}</ErrorMessage>
          ) : null} */}
          <FormAddButton
            type="button"
            onClick={() => {
              dispatch(
                addDate({
                  startDate: formik.values.start,
                  endDate: formik.values.end,
                }),
              );
            }}
          >
            Додати
          </FormAddButton>
        </CalendarsContainer>
        <SelectAndButtonContainer>
          <SelectContainer>
            <BookSelector
              value={formik.values.book}
              onChange={handleBook}
              // selectedBooks={selectedBooks}
            />
          </SelectContainer>
          <FormAddButton
            type="button"
            onClick={() => {
              dispatch(
                addBook({
                  book: formik.values.book,
                }),
              );
            }}
          >
            Додати
          </FormAddButton>
        </SelectAndButtonContainer>
      </FormContainer>
      {/* <TrainingList /> */}
    </>
  );
};

export default TrainingForm;
