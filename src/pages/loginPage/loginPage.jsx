import LoginForm from '../../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    isLoggedIn && navigate((location.pathname = '/library'));
  });
  return !isLoggedIn && <LoginForm></LoginForm>;
};
export default LoginPage;
