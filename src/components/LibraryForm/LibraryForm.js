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
  // const submit = text => dispatch(booksOperations.addBooks(text));

  const onSubmit = async (values, formikProps) => {
    await dispatch(booksOperations.addBooks(values));
    formikProps.resetForm('');
    console.log('onSubmit -> values, formikProps', values);
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
        onSubmit={onSubmit}

        // {values => {
        //   const { title, author, date, pages } = values;

        //   fetch('https://project-books-api.herokuapp.com/api/books', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //       title: values.title,
        //       author: values.author,
        //       year: values.year,
        //       pages: values.pages,
        //     }),
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   });
        //   // dispatch(booksOperations.addBooks({ title, author, date, pages }));

        //   console.log(values);
        // }}
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
          <Form
            role="form"
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <DivInput>
              <BasicDiv>
                <LabelOne htmlFor="title">
                  Назва книги
                  {!values.title.length || errors.title ? (
                    <span>не маєпочинатиися з прробіла чи дефіза</span>
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
                      <span>*</span>
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
                      type="text"
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
