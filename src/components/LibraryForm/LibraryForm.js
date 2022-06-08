import { Formik } from 'formik';

import validationSchema from '../../validation/books';
// import { useState } from 'react';
import {
  Form,
  Input,
  Container,
  LabelOne,
  LabelTwo,
  DivInput,
  OtherInput,
  ButtonDiv,
  BasicDiv,
} from './LibraryForm.styled.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { booksSelectors, booksOperations } from '../../redux/books';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

const LibraryForm = () => {
  const { getBooks } = booksSelectors;

  const valueForm = useSelector(getBooks);
  const dispatch = useDispatch();
  const onSubmit = text => dispatch(booksOperations.addBooks(text));

  const handleSubmit = event => {
    event.preventDefault();
    // const state = { title, author, date, pages };

    // valueForm.some(book => book.title === title)
    //   ? alert('Такой контакт уже есть')
    // onSubmit(state);
    // reset();
  };

  return (
    <Container>
      <Formik
        initialValues={{
          title: '',
          author: '',
          date: '',
          pages: '',
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={values => {
          valueForm.some(book => book.title === values.title)
            ? alert('Такой контакт уже есть')
            : onSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form>
            <DivInput>
              <BasicDiv>
                <LabelOne htmlFor="title">
                  Назва книги
                  {!values.title.length || errors.title ? (
                    <span>*</span>
                  ) : (
                    <></>
                  )}
                  <br />
                  <Input
                    type="text"
                    name="title"
                    placeholder="..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                </LabelOne>

                <br />
                {touched.title && errors.title && <span>{errors.title}</span>}
              </BasicDiv>
              <OtherInput>
                <BasicDiv>
                  <LabelOne htmlFor="author">
                    Автор книги
                    {!values.author.length || errors.author ? (
                      <span>{errors.author}</span>
                    ) : (
                      <></>
                    )}
                    <br />
                    <Input
                      type="text"
                      name="author"
                      placeholder="..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.author}
                    />
                  </LabelOne>
                  <br />
                  {touched.author && errors.author && (
                    <span>{errors.author}</span>
                  )}
                </BasicDiv>
                <BasicDiv>
                  <LabelTwo htmlFor="date">
                    Рік випуску
                    {!values.date.length || errors.date ? (
                      <span>{errors.date}</span>
                    ) : (
                      <></>
                    )}
                    <br />
                    <Input
                      type="text"
                      name="date"
                      placeholder="..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.date}
                    />
                  </LabelTwo>
                  <br />
                  {touched.date && errors.date && <span>{errors.date}</span>}
                </BasicDiv>
                <BasicDiv>
                  <LabelTwo htmlFor="pages">
                    Кількість сторінок
                    {!values.pages.length || errors.pages ? (
                      <span>*</span>
                    ) : (
                      <></>
                    )}
                    <br />
                    <Input
                      type="number"
                      name="pages"
                      placeholder="..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.pages}
                    />
                  </LabelTwo>
                  <br />
                  {touched.pages && errors.pages && <span>{errors.pages}</span>}
                </BasicDiv>
              </OtherInput>
              <ButtonDiv>
                <ButtonAdd
                  disabled={
                    (!isValid && dirty) ||
                    (!isValid && !dirty) ||
                    (Object.keys(touched).length === 0 &&
                      touched.constructor === Object)
                  }
                />
              </ButtonDiv>
            </DivInput>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LibraryForm;
