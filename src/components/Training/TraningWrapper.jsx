import Responsive from 'react-responsive';
import TrainingForm from './TrainingForm/TrainingForm';
import TrainingList from './TrainingList/TrainingList';
import MyGoal from '../MyGoal/MyGoal';
import {
  TrainingWrapperStyled,
  TrainingWrapperStyledUpperPart,
  TrainingWrapperTrainingInfo,
} from './TrainingWrapper.styled';

const TrainingWrapper = () => {
  const Mobile = props => <Responsive {...props} maxWidth={767} />;

  const Tablet = props => (
    <Responsive {...props} minWidth={768} maxWidth={1279} />
  );

  const Desktop = props => <Responsive {...props} minWidth={1280} />;
  return (
    <TrainingWrapperStyled>
      <Mobile>
        <MyGoal />
        <TrainingList />
      </Mobile>
      <Tablet>
        <MyGoal />
        <TrainingForm />
        <TrainingList />
      </Tablet>
      <Desktop>
        <TrainingWrapperStyledUpperPart>
          <TrainingWrapperTrainingInfo>
            <TrainingForm />
            <TrainingList />
          </TrainingWrapperTrainingInfo>

          <MyGoal />
        </TrainingWrapperStyledUpperPart>
      </Desktop>
    </TrainingWrapperStyled>
  );
};

export default TrainingWrapper;
