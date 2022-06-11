import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .matches(
      /^[^-\s]([a-zа-яФ-ЯA-Z0-9@$!_\s,%*\-.#?&]{1,50})$/,
      'Поле не  може починатиися з пробіла чи дефіса',
    )
    .required(''),

  author: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я0-9]+((['-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Має бути рядком',
    )
    .required(''),
  date: yup
    .string()
    .matches(/^[^-s]([0-9]{1,4})$/, 'только 4 цифры')
    .required(''),
  pages: yup
    .string()
    .matches(/^([0-9]{1,4})$/, 'до 4 цифр')
    .required(''),
});

export default validationSchema;
