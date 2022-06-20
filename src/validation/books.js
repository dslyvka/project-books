import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .matches(
      /^[^-\s=]([a-zа-яzабвгдеёжзийклмнопрстуфхцчшщьыъэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯіїюґҐІЮЇєЄжЖA-Z0-9@$!_\s,%*\-.#?& ]{1,50})$/,
      'Поле не  може починатися з пробілу або дефісу',
    )
    .required(''),

  author: yup
    .string()
    .matches(
      /^[^-\s]([a-zа-яА-ЯA-ZіІїЇєЄ@$!_\s,'%*\-.#?&]{1,50})$/,
      'Поле не  може починатися з пробілу , дефісу або цифр',
    )
    .required(''),
  date: yup
    .string()
    .min(4, 'Не менше 4 цифр')
    .max(4, 'Не більше 4 цифр')
    .matches(
      /^[^-=s03456789]([0-9])/,
      'Дане поле не може починатися з цифр 0/3/4/5/6/7/8/9',
    )
    .required(''),
  pages: yup
    .string()
    .max(4, 'Не більше 4 цифр')
    .matches(/^[^-\s=]([0-9])/, 'Поле не  може починатися з пробілу або дефісу')
    .required(''),
});

export default validationSchema;
