// import { Formik } from 'formik';
// import validationSchema from '../../validation/register.js';

// import GoogleAuthBtn from '../../components/GoogleAuth/GoogleAuth.js';
import RegisterForm from '../../components/RegisterForm/RegisterForm.js';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { PageAnimation } from '../../components/PageAnimation/PageAnimation';

const LoginPage = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    isLoggedIn && navigate((location.pathname = '/library'));
  });

  return (
    !isLoggedIn && (
      <PageAnimation>
        <RegisterForm />
      </PageAnimation>
    )
    // <Formik
    //   initialValues={{
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //   }}
    //   validateOnBlur
    //   validationSchema={validationSchema}
    //   onSubmit={values => console.log(values)}
    // >
    //   {({
    //     values,
    //     errors,
    //     touched,
    //     isValid,
    //     dirty,
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //   }) => (
    //     <div>
    //       <GoogleAuthBtn></GoogleAuthBtn>
    //       <form>
    //         <p>
    //           {!values.name.length || errors.name ? (
    //             <label htmlFor="name">Ім'я *</label>
    //           ) : (
    //             <label htmlFor="name">Ім'я</label>
    //           )}

    //           <br />
    //           <input
    //             type="text"
    //             name="name"
    //             placeholder="..."
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.name}
    //           />
    //           <br />
    //           {touched.name && errors.name && <span>{errors.name}</span>}
    //         </p>

    //         <p>
    //           {!values.email.length || errors.email ? (
    //             <label htmlFor="email">Електронна адреса *</label>
    //           ) : (
    //             <label htmlFor="email">Електронна адреса</label>
    //           )}
    //           <br />
    //           <input
    //             type="email"
    //             name="email"
    //             placeholder="your@email.com"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.email}
    //           />
    //           <br />
    //           {touched.email && errors.email && <span>{errors.email}</span>}
    //         </p>

    //         <p>
    //           {!values.password.length || errors.password ? (
    //             <label htmlFor="password">Пароль *</label>
    //           ) : (
    //             <label htmlFor="password">Пароль</label>
    //           )}
    //           <br />
    //           <input
    //             type="password"
    //             name="password"
    //             placeholder="..."
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.password}
    //           />
    //           <br />
    //           {touched.password && errors.password && (
    //             <span>{errors.password}</span>
    //           )}
    //         </p>

    //         <p>
    //           {!values.confirmPassword.length || errors.confirmPassword ? (
    //             <label htmlFor="confirmPassword">Підтвердити пароль *</label>
    //           ) : (
    //             <label htmlFor="confirmPassword">Підтвердити пароль</label>
    //           )}
    //           <br />
    //           <input
    //             type="password"
    //             name="confirmPassword"
    //             placeholder="..."
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.confirmPassword}
    //           />
    //           <br />
    //           {touched.confirmPassword && errors.confirmPassword && (
    //             <span>{errors.confirmPassword}</span>
    //           )}
    //         </p>

    //         <button
    //           disabled={
    //             (!isValid && dirty) ||
    //             (!isValid && !dirty) ||
    //             (Object.keys(touched).length === 0 &&
    //               touched.constructor === Object)
    //           }
    //           type="submit"
    //           onClick={handleSubmit}
    //         >
    //           Зареєструватися
    //         </button>

    //         <p>
    //           Вже з нами? <a href="./">Увійти</a>
    //         </p>
    //       </form>
    //     </div>
    //   )}
    // </Formik>
  );
};

export default LoginPage;
