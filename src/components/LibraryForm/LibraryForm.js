import { Formik } from 'formik';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useWindowWidth } from '@react-hook/window-size';
import validationSchema from '../../validation/books';
import { notifySuccess, notifyError } from './notify';

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
  DIV,
} from './LibraryForm.styled.jsx';
import { getBooks } from '../../redux/books/books-selector';
import { useDispatch, useSelector } from 'react-redux';
import { booksOperations } from '../../redux/books';
import ButtonAdd from '../ButtonAdd/ButtonAdd';

const LibraryForm = () => {
  const books = useSelector(getBooks);
  const dispatch = useDispatch();
  const width = useWindowWidth();
  // const submit = text => dispatch(booksOperations.addBooks(text));

  const onSubmit = async (values, formikProps) => {
    if (
      books.going.find(
        book => book.title.toLowerCase() === values.title.toLowerCase(),
      )
    ) {
      width < 768
        ? notifyError(values, 'bottom-center')
        : notifyError(values, 'top-center');
    }

    await dispatch(booksOperations.addBooks(values));
    formikProps.resetForm('');
    dispatch(booksOperations.fetchBooks());
    if (width < 768) {
      notifySuccess(values);
    }
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
              <DIV>
                <ToastContainer
                  position="bottom-center"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable
                  pauseOnHover={false}
                />
              </DIV>
            </DivInput>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LibraryForm;
