import { Formik } from 'formik';
import validationSchema from '../../validation/login';

const LoginPage = () => {
  return (
    <>
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
            <button type="button">Google</button>
            <form>
              <p>
                {!values.email.length || errors.email ? (
                  <label htmlFor="email">Електронна адреса *</label>
                ) : (
                  <label htmlFor="email">Електронна адреса</label>
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
                  <label htmlFor="password">Пароль *</label>
                ) : (
                  <label htmlFor="password">Пароль</label>
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

              <button
                disabled={
                  (!isValid && dirty) ||
                  (!isValid && !dirty) ||
                  (Object.keys(touched).length === 0 &&
                    touched.constructor === Object)
                }
                type="submit"
                onClick={handleSubmit}
              >
                Увійти
              </button>

              <p>
                <a href="/register">Реєстрація</a>
              </p>
            </form>
          </div>
        )}
      </Formik>

      <p>
        Книги — это корабли мысли, странствующие по волнам времени и бережно
        несущие свой драгоценный груз от поколения к поколению.{' '}
      </p>

      <p>Бэкон Ф.</p>
    </>
  );
};
export default LoginPage;
