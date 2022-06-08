import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup.string().typeError('Має бути рядком').required('*'),
  author: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я0-9]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Має бути рядком',
    )
    .required('*'),
  date: yup.date().required('*'),
  pages: yup.number().positive().integer().required('*'),
});

export default validationSchema;
