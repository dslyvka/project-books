import LoginForm from '../../components/LoginForm/LoginForm';
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
        <LoginForm></LoginForm>
      </PageAnimation>
    )
  );
};
export default LoginPage;
