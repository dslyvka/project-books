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
  StatisticList,
  ListItem,
  TimeStyled,
} from './Result.styled';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import sprite from '../../images/sprite/sprites.svg';
import trainingOperations from '../../redux/training/trainingOperations';

const Result = () => {
  // const statisticsArray = true;
  const dispatch = useDispatch();

  const onSubmit = async (values, formikProps) => {
    // console.log(values);
    await dispatch(trainingOperations.addResult(values));
    formikProps.resetForm('');
    // console.log('onSubmit -> values, formikProps', values);
  };

  const statisticsArray = [
    // { statisticDate: '2022-06-14T00:00:00.000Z', statisticResult: 0 },
    { statisticDate: '2022-06-14T18:44:15.398Z', statisticResult: 250 },
    { statisticDate: '2022-06-14T22:04:19.437Z', statisticResult: 52 },
    { statisticDate: '2022-06-14T20:30:01.093Z', statisticResult: 31 },
    // { statisticDate: '2022-06-14T19:09:34.956Z', statisticResult: 2 },
    // { statisticDate: '2022-06-14T19:13:36.850Z', statisticResult: 2 },
    // { statisticDate: '2022-06-14T19:14:09.557Z', statisticResult: 2 },
    // { statisticDate: '2022-06-14T19:16:27.508Z', statisticResult: 2 },
    // { statisticDate: '2022-06-14T19:17:48.422Z', statisticResult: 5 },
    // { statisticDate: '2022-06-14T19:19:52.228Z', statisticResult: 10 },
    // { statisticDate: '2022-06-14T19:19:52.228Z', statisticResult: 45 },
    // { statisticDate: '2022-06-14T19:33:26.748Z', statisticResult: 2 },
  ];

  return (
    <Container>
      <TextStyled>Результати</TextStyled>
      <Formik
        initialValues={{
          statisticDate: new Date(),
          statisticResult: '',
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
                    name={'statisticDate'}
                    maxDate={new Date()}
                    selected={values.statisticDate}
                    value={values.statisticDate}
                    dateFormat="dd.MM.yyyy"
                    onChange={e => setFieldValue('statisticDate', e)}
                    autoComplete="off"
                  />
                  <SvgStyled width="13" height="7">
                    <use href={`${sprite}#icon-polygon`} width="13" />
                  </SvgStyled>
                </label>
              </LiStyled>

              <LiStyled>
                <label htmlFor="statisticResult">
                  <LabelText>Кількість сторінок</LabelText>
                  <Input
                    type="number"
                    name="statisticResult"
                    min="0"
                    placeholder="..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.statisticResult}
                    autoComplete="off"
                  />
                </label>
              </LiStyled>
            </UlStyled>
            <ButtonStyled
              type="submit"
              disabled={
                values.statisticDate.length === 0 ||
                values.statisticResult.length === 0
              }
            >
              Додати результат
            </ButtonStyled>
          </Form>
        )}
      </Formik>
      {statisticsArray && (
        <Statistic>
          <TextStatistic>Статистика</TextStatistic>
          <StatisticList>
            {statisticsArray.map(el => (
              <ListItem key={el.statisticDate}>
                <span>{moment(el.statisticDate).format('L')}</span>
                <TimeStyled>
                  {moment(el.statisticDate).format('HH:mm:ss')}
                </TimeStyled>
                <span>
                  {el.statisticResult}
                  <TimeStyled> стор.</TimeStyled>
                </span>
              </ListItem>
            ))}
          </StatisticList>
        </Statistic>
      )}
    </Container>
  );
};

export default Result;
