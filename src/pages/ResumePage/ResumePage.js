import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { PageAnimation } from '../../components/PageAnimation/PageAnimation';
import ResumeList from '../../components/ResumeList/ResumeList';
import { Div } from './ResumePage.styled';

const ResumePage = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    !isLoggedIn && navigate((location.pathname = '/library'));
  });
  window.scrollTo(0, 0);
  return (
    isLoggedIn && (
      <PageAnimation>
        <Div>
          <ResumeList />
        </Div>
      </PageAnimation>
    )
  );
};

export default ResumePage;
