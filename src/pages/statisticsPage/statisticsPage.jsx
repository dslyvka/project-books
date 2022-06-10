import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const StatisticsPage = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    !isLoggedIn && navigate((location.pathname = '/login'));
  });

  return isLoggedIn && <h1>statistics</h1>;
};

export default StatisticsPage;
