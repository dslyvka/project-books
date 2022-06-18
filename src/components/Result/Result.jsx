import { useEffect, useState } from 'react';
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
import Modal from '../Modal/Modal';
import CongratulationsText from '../СongratulationsText/СongratulationsText';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import sprite from '../../images/sprite/sprites.svg';
import trainingActions from '../../redux/training/trainingActions';

const Result = () => {
  const [showModal, setShowModal] = useState(false);
  const { statistics, totalPages, readedPages, startDate, bookNumber } =
    useSelector(state => state.training);
  const [readBook, setReadBook] = useState(bookNumber);

  const togleModal = () => {
    setShowModal(showModal => !showModal);
  };

  useEffect(() => {
    if (bookNumber !== readBook) {
      togleModal();
      setReadBook(readBook + 1);
    }
  }, [bookNumber]);

  const statArray = [...statistics];
  statArray.shift();

  const dispatch = useDispatch();

  const onSubmit = (values, formikProps) => {
    formikProps.resetForm('');
    dispatch(trainingActions.addResult(values));
  };

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
                    // type="dateFormat"
                    name={'statisticDate'}
                    minDate={new Date(startDate)}
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
                    max={totalPages - readedPages}
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
      {statArray.length > 0 && (
        <Statistic>
          <TextStatistic>Статистика</TextStatistic>
          <StatisticList>
            {statArray.map(el => (
              <ListItem key={uuidv4()}>
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
      {showModal && (
        <Modal onClose={togleModal}>
          <CongratulationsText onClose={togleModal} />
        </Modal>
      )}
    </Container>
  );
};

export default Result;
