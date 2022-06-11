import * as yup from 'yup';

const trainingFormSchema = yup.object().shape({
  start: yup.date().required('Enter the first day of training'),
  end: yup
    .date()
    .required('Enter the last day of training')
    .min(yup.ref('start'), 'Finish date can not be sooner than start date'),
  book: yup.object().required('Choose at least one book'),
});

export default trainingFormSchema;
