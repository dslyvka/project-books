import { Formik } from 'formik';
import { useWindowWidth } from '@react-hook/window-size';

import validationSchema from '../../validation/register';

import GoogleAuthBtn from '../GoogleAuth/GoogleAuth';
import { ButtonStyled } from '../RegularButton/Button.styled';
import { StyledForm, StyledDiv } from './RegisterForm.styled';
import QuoteSection from '../QuoteSection/QuoteSection';

const LoginForm = () => {
  const width = useWindowWidth();
  // console.log(width);

  return (
    <StyledDiv>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={values => {
          // fetch('http://localhost:3001/api/users/signup', {
          //   method: 'POST',
          //   body: JSON.stringify({
          //     name: values.name,
          //     email: values.email,
          //     password: values.password,
          //   }),
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          // });
          console.log(values);
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
          <StyledForm>
            <ul>
              <GoogleAuthBtn />
              <li>
                <label
                  htmlFor="name"
                  className="form__label"
                  style={{ marginTop: '28px' }}
                >
                  Ім'я
                  {!values.name.length || errors.name ? <span> *</span> : <></>}
                </label>

                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <br />
                {touched.name && errors.name && <span>{errors.name}</span>}
              </li>

              <li>
                <label htmlFor="email" className="form__label">
                  Електронна адреса
                  {!values.email.length || errors.email ? (
                    <span> *</span>
                  ) : (
                    <></>
                  )}
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <br />
                {touched.email && errors.email && <span>{errors.email}</span>}
              </li>

              <li>
                <label htmlFor="password" className="form__label">
                  Пароль
                  {!values.password.length || errors.password ? (
                    <span> *</span>
                  ) : (
                    <></>
                  )}
                </label>

                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <br />
                {touched.password && errors.password && (
                  <span>{errors.password}</span>
                )}
              </li>

              <li>
                <label htmlFor="confirmPassword" className="form__label">
                  Підтвердити пароль
                  {!values.confirmPassword.length || errors.confirmPassword ? (
                    <span> *</span>
                  ) : (
                    <></>
                  )}
                </label>
                <br />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <br />
                {touched.confirmPassword && errors.confirmPassword && (
                  <span>{errors.confirmPassword}</span>
                )}
              </li>
              <ButtonStyled
                disabled={
                  (!isValid && dirty) ||
                  (!isValid && !dirty) ||
                  (Object.keys(touched).length === 0 &&
                    touched.constructor === Object)
                }
                type="submit"
                onClick={handleSubmit}
                color="#FFFFFF"
                backgroundColor="#FF6B08;"
              >
                Зареєструватися
              </ButtonStyled>

              <p>
                Вже з нами? <a href="./">Увійти</a>
              </p>
            </ul>
          </StyledForm>
        )}
      </Formik>
      {width >= 768 ? <QuoteSection /> : <></>}
    </StyledDiv>
  );
};

export default LoginForm;
