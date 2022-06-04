import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .typeError('Має бути рядком')
    .required("Це поле обов'язкове"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Email має бути валідним',
    )
    .required("Це поле обов'язкове"),
  password: yup
    .string()
    .required("Це поле обов'язкове")
    .min(6, 'Занадто короткий пароль. Пароль має містити мінімум 6 символів.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Паролі мають співпадати')
    .required("Це поле обов'язкове"),
});

export default validationSchema;
