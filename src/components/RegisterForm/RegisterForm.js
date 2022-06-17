import { Formik } from 'formik';
import { useWindowWidth } from '@react-hook/window-size';

import validationSchema from '../../validation/register';

import GoogleAuthBtn from '../GoogleAuth/GoogleAuth';
import { ButtonStyled } from '../RegularButton/Button.styled';
import { StyledForm, StyledDiv } from './RegisterForm.styled';
import QuoteSection from '../QuoteSection/QuoteSection';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import actions from '../../redux/auth/auth-actions';

const RegisterForm = () => {
  const width = useWindowWidth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          // console.log(values);

          const { name, email, password } = values;
          dispatch(actions.register({ name, email, password }));
          navigate('/login');
          // console.log(values);
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
          <StyledForm
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit(values);
              }
            }}
          >
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
                  maxLength="100"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                <span className="input__error">
                  {touched.name && errors.name ? errors.name : ''}
                </span>

                <br />
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
                  maxLength="63"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <br />

                <span className="input__error">
                  {touched.email && errors.email ? errors.email : ''}
                </span>
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
                  maxLength="30"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <br />
                <span className="input__error">
                  {touched.password && errors.password ? errors.password : ''}
                </span>
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
                  maxLength="30"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  onPaste={e => {
                    e.preventDefault();
                  }}
                />
                <br />

                <span className="input__error">
                  {touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''}
                </span>
              </li>
              <ButtonStyled
                // disabled={
                //   (!isValid && dirty) ||
                //   (!isValid && !dirty) ||
                //   (Object.keys(touched).length === 0 &&
                //     touched.constructor === Object)
                // }
                type="submit"
                onClick={handleSubmit}
                color="#FFFFFF"
                backgroundColor="#FF6B08;"
              >
                Зареєструватися
              </ButtonStyled>

              <p>
                Вже з нами? <a href="./login">Увійти</a>
              </p>
            </ul>
          </StyledForm>
        )}
      </Formik>
      {width >= 768 ? <QuoteSection /> : <></>}
    </StyledDiv>
  );
};

export default RegisterForm;
