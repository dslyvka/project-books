import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyTrainingSuccess } from '../../LibraryForm/notify';
import { useWindowWidth } from '@react-hook/window-size';
import moment from 'moment';
import trainingActions from '../../../redux/training/trainingActions';
import trainingFormSchema from '../../../validation/training';
import BookSelector from '../BookSelector/BookSelector';
import DatePickerInput from '../DatePicker/DatePicker';
import Timers from '../../Timers/Timers';
import {
  FormContainer,
  FormTitle,
  CalendarsContainer,
  SelectAndButtonContainer,
  SelectContainer,
  FormAddButton,
} from './TrainingForm.styled';

const TrainingForm = () => {
  const start = useSelector(state => state.training.startDate);
  const end = useSelector(state => state.training.endDate);
  const isStarted = useSelector(state => state.training.isStarted);
    const width = useWindowWidth();

  const { addBook, addDate } = trainingActions;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      start: start ? start : '',
      end: end ? end : '',
      book: null,
    },
    validationSchema: trainingFormSchema,
    onSubmit: values => {
      dispatch(addBook(values.book));
    },
  });

  const handleStartDate = date => {
    const start = moment(date).format('YYYY-MM-DD');
    dispatch(
      addDate({
        startDate: start,
        endDate: end,
      }),
    );
    formik.setFieldValue('start', start);
  };

  const handleEndDate = date => {
    const end = moment(date).format('YYYY-MM-DD');
    dispatch(
      addDate({
        startDate: formik.values.start,
        endDate: end,
      }),
    );
    formik.setFieldValue('end', end);
  };

  const handleBook = value => {
    formik.setFieldValue('book', value);
  };

  const onSubmit = async (formik) => {
    
    // console.log(formik.values);
                formik.values?.book?.author &&
                  dispatch(
                    addBook({
                      book: formik.values.book,
                    }),
                  );
                if (width < 768) {
      notifyTrainingSuccess(formik.values);
    }
              

  }

  return (
    <>
      <FormContainer onSubmit={formik.handleSubmit} autoComplete="off">
        {!isStarted ? (
          <>
            <FormTitle>Моє тренування </FormTitle>
            <CalendarsContainer>
              <DatePickerInput
                value={formik.values.start}
                placeholderText="Початок"
                onChange={handleStartDate}
                pickedDate={start ? new Date(start) : ''}
                minDate={new Date()}
                maxDate={new Date()}
              />

              <DatePickerInput
                value={formik.values.end}
                placeholderText="Кінець"
                onChange={handleEndDate}
                pickedDate={end ? new Date(end) : ''}
                minDate={new Date().setDate(new Date().getDate() + 1)}
                maxDate={false}
              />
            </CalendarsContainer>
          </>
        ) : (
          <Timers />
        )}
        {!isStarted ? (
          <SelectAndButtonContainer>
            <SelectContainer>
              <BookSelector value={''} onChange={handleBook} />
            </SelectContainer>
            {/*  */}
                <ToastContainer
                  position="bottom-center"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable
                  pauseOnHover={false}
                />
            <FormAddButton
              type="button"
              onClick={() => 
               onSubmit(formik)}
            >
              Додати
            </FormAddButton>
          </SelectAndButtonContainer>
        ) : (
          <></>
        )}
      </FormContainer>
      {/* <TrainingList /> */}
    </>
  );
};

export default TrainingForm;
