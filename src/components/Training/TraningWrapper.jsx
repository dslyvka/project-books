import { useState } from 'react';
import { useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import TrainingForm from './TrainingForm/TrainingForm';
import TrainingList from './TrainingList/TrainingList';
import MyGoal from '../MyGoal/MyGoal';
import LineChart from '../LineChart/LineChart';
import TrainingOpenModalButton from './TrainingOpenModalButton/TrainingOpenModalButton';
import TrainingModal from './TrainingModal/TrainingModal';
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

  const [isTrainingModalShown, setTrainingModalShown] = useState(false);
  const openModal = () => {
    setTrainingModalShown(!isTrainingModalShown);
  };
  return (
    <TrainingWrapperStyled>
      <Mobile>
        <MyGoal />
        <TrainingList />
        <LineChart
          startDate={'06/08/2022'}
          endDate={'06/15/2022'}
          pages={600}
          readPages={[150, 0, 100, 0, 0, 0, 0]}
        />
        <TrainingOpenModalButton openModal={openModal} />
        <TrainingModal
          isTrainingModalShown={isTrainingModalShown}
          setTrainingModalShown={setTrainingModalShown}
        />
      </Mobile>
      <Tablet>
        <MyGoal />
        <TrainingForm />
        <TrainingList />
        <LineChart
          startDate={'06/08/2022'}
          endDate={'06/15/2022'}
          pages={600}
          readPages={[150, 0, 100, 0, 0, 0, 0]}
        />
      </Tablet>
      <Desktop>
        <TrainingWrapperStyledUpperPart>
          <TrainingWrapperTrainingInfo>
            <TrainingForm />
            <TrainingList />
          </TrainingWrapperTrainingInfo>

          <MyGoal />
        </TrainingWrapperStyledUpperPart>
        <LineChart
          startDate={'06/08/2022'}
          endDate={'06/15/2022'}
          pages={600}
          readPages={[150, 0, 100, 0, 0, 0, 0]}
        />
      </Desktop>
    </TrainingWrapperStyled>
  );
};

export default TrainingWrapper;
