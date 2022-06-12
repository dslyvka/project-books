import { Formik } from 'formik';

import validationSchema from '../../validation/books';
// import { useState } from 'react';
import {
  Form,
  Input,
  Container,
  Label,
  DivInput,
  OtherInput,
  ButtonDiv,
  BasicDiv,
  SpanErr,
  SpanRed,
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
                <Label htmlFor="title">
                  Назва книги
                  {!values.title.length || errors.title ? (
                    <SpanRed> *</SpanRed>
                  ) : (
                    <> </>
                  )}
                </Label>
                <br />
                <Input
                  type="text"
                  name="title"
                  placeholder="..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  autocomplete="off"
                />
                {touched.title && errors.title && (
                  <SpanErr widthtablet="704px" widthDesc="346px">
                    {errors.title}
                  </SpanErr>
                )}
              </BasicDiv>
              <OtherInput>
                <BasicDiv>
                  <Label htmlFor="author">
                    Автор книги
                    {!values.author.length || errors.author ? (
                      <SpanRed> *</SpanRed>
                    ) : (
                      <></>
                    )}
                  </Label>
                  <br />
                  <Input
                    type="text"
                    name="author"
                    placeholder="..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.author}
                    autocomplete="off"
                  />

                  {touched.author && errors.author && (
                    <SpanErr widthtablet="336px" widthDesc="250px">
                      {errors.author}
                    </SpanErr>
                  )}
                </BasicDiv>
                <BasicDiv>
                  <Label htmlFor="date">
                    Рік випуску
                    {!values.date.length || errors.date ? (
                      <SpanRed> *</SpanRed>
                    ) : (
                      <></>
                    )}
                  </Label>
                  <br />
                  <Input
                    type="text"
                    name="date"
                    placeholder="..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                    autocomplete="off"
                  />

                  {touched.date && errors.date && (
                    <SpanErr widthtablet="152px" widthDesc="134px">
                      {errors.date}
                    </SpanErr>
                  )}
                </BasicDiv>
                <BasicDiv>
                  <Label htmlFor="pages">
                    Кількість сторінок
                    {!values.pages.length || errors.pages ? (
                      <SpanRed> *</SpanRed>
                    ) : (
                      <></>
                    )}
                  </Label>
                  <br />
                  <Input
                    type="text"
                    name="pages"
                    placeholder="..."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pages}
                    autocomplete="off"
                  />

                  {touched.pages && errors.pages && (
                    <SpanErr widthtablet="152px" widthDesc="134px">
                      {errors.pages}
                    </SpanErr>
                  )}
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
