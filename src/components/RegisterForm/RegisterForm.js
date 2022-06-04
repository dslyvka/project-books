import { Formik } from 'formik';
import validationSchema from '../../validation/register';

import GoogleAuthBtn from '../GoogleAuth/GoogleAuth';
import { ButtonStyled } from '../RegularButton/Button.styled';
import { StyledForm } from './RegisterForm.styled';

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}
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
        <div>
          <StyledForm>
            <GoogleAuthBtn />
            <p>
              {!values.name.length || errors.name ? (
                <label htmlFor="name" className="form__label">
                  Ім'я <span>*</span>
                </label>
              ) : (
                <label htmlFor="name" className="form__label">
                  Ім'я
                </label>
              )}

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
            </p>

            <p>
              {!values.email.length || errors.email ? (
                <label htmlFor="email" className="form__label">
                  Електронна адреса <span>*</span>
                </label>
              ) : (
                <label htmlFor="email" className="form__label">
                  Електронна адреса
                </label>
              )}
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
            </p>

            <p>
              {!values.password.length || errors.password ? (
                <label htmlFor="password" className="form__label">
                  Пароль <span>*</span>
                </label>
              ) : (
                <label htmlFor="password" className="form__label">
                  Пароль
                </label>
              )}
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
            </p>

            <p>
              {!values.confirmPassword.length || errors.confirmPassword ? (
                <label htmlFor="confirmPassword" className="form__label">
                  Підтвердити пароль <span>*</span>
                </label>
              ) : (
                <label htmlFor="confirmPassword" className="form__label">
                  Підтвердити пароль
                </label>
              )}
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
            </p>

            {/* <button
              disabled={
                (!isValid && dirty) ||
                (!isValid && !dirty) ||
                (Object.keys(touched).length === 0 &&
                  touched.constructor === Object)
              }
              type="submit"
              onClick={handleSubmit}
            >
              Зареєструватися
            </button> */}

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
          </StyledForm>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;