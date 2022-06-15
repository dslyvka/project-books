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
        <LineChart

        />
    </TrainingWrapperStyled>
  );
};

export default TrainingWrapper;

        // <LineChart
        //   startDate={'2022-06-08T00:00:00.000Z'}
        //   endDate={'2022-06-13T00:00:00.000Z'}
        //   totalPages={600}
        //   readedPages={200}
        //   statistics={[
        //     { statisticDate: '2022-06-09T00:00:00.000Z', statisticResult: 100 },
        //     { statisticDate: '2022-06-10T00:00:00.000Z', statisticResult: 100 },
        //   ]}
        // />;