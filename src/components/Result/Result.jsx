import {
  Container,
  TextStyled,
  Form,
  LabelText,
  DatePickerStyled,
  Input,
  UlStyled,
  LiStyled,
  SvgStyled,
  ButtonStyled,
  Statistic,
  TextStatistic,
} from './Result.styled';
import { Formik } from 'formik';
import sprite from '../../images/sprite/sprites.svg';
// import DatePicker from 'react-datepicker';

const Result = () => {
  const statisticsArray = true;

  const onSubmit = async (values, formikProps) => {
    //   await dispatch(booksOperations.addBooks(values));
    formikProps.resetForm('');
    console.log('onSubmit -> values, formikProps', values);
    console.log(formikProps);
  };

  return (
    <Container>
      <TextStyled>Результати</TextStyled>
      <Formik
        initialValues={{
          date: new Date(),
          pages: '',
        }}
        validateOnBlur
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => (
          <Form
            role="form"
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <UlStyled>
              <LiStyled>
                <label htmlFor="title">
                  <LabelText>Дата</LabelText>
                  <DatePickerStyled
                    name={'date'}
                    maxDate={new Date()}
                    selected={values.date}
                    value={values.date}
                    dateFormat="dd.MM.yyyy"
                    onChange={e => setFieldValue('date', e)}
                    autoComplete="off"
                  />
                  <SvgStyled width="13" height="7">
                    <use href={`${sprite}#icon-polygon`} width="13" />
                  </SvgStyled>
                </label>
              </LiStyled>

              <LiStyled>
                <label htmlFor="pages">
                  <LabelText>Кількість сторінок</LabelText>
                  <Input
                    type="number"
                    name="pages"
                    min="0"
                    placeholder="..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pages}
                    autoComplete="off"
                  />
                </label>
              </LiStyled>
            </UlStyled>
            <ButtonStyled
              type="submit"
              disabled={values.date.length === 0 || values.pages.length === 0}
            >
              Додати результат
            </ButtonStyled>
          </Form>
        )}
      </Formik>
      {statisticsArray && (
        <Statistic>
          <TextStatistic>Статистика</TextStatistic>
          {/* <ul>
            {statisticsArray.map(el => (
              <li key={el.date}>
                <div>
                  <span>el.date</span>
                  <span>el.time</span>
                  <span>el.pages</span>
                </div>
              </li>
            ))}
          </ul> */}
        </Statistic>
      )}
    </Container>
  );
};

export default Result;
