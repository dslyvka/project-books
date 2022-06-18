import MyGoalStyled from './MyGoal.styled';
import { useSelector } from 'react-redux';
import getCurrTraining from '../../redux/training/trainingActions';

// console.log(trainingSelectors);

const MyGoal = ({ startTraining }) => {
  const isTraining = useSelector(state => state.training.isStarted);
  const books = useSelector(state => state.training.books);
  const bookNumber = useSelector(state => state.training.bookNumber);
  const startDate = new Date(
    useSelector(state => state.training.startDate),
  );
  const endDate = new Date(
    useSelector(state => state.training.endDate),
  );
  const countOfDays =
    endDate - startDate > 0 ? (endDate - startDate) / 86400000 : ((endDate - startDate) * -1) / 86400000;

  let leftToRead = books.length - bookNumber;


  return (
    <MyGoalStyled className="myGoalStyled" startTraining={startTraining}>
      <h2 className="statistic-title">
        Моя мета прочитати
      </h2>
      <div className="statistic">
        <div className="statistic-book">
          <div className="statistic__cell">
            <span className="statistic__number">{books.length}</span>
          </div>
          <p className="statistic__text">
            Кількість <span> книжок</span>
          </p>
        </div>
        <div className="statistic-day">
          <div className="statistic__cell">
            <span className="statistic__number">
              {!isNaN(countOfDays) ? countOfDays : 0}
            </span>
          </div>
          <p className="statistic__text">
            Кількість <span> днів</span>
          </p>
        </div>
        {isTraining && (
          <div className="statistic-reading">
            <div className="statistic__cell">
              <span className="statistic__number">{leftToRead}</span>
            </div>

            <p className="statistic__text">
              Залишилось <span> книжок</span>
            </p>
          </div>
        )}
      </div>
    </MyGoalStyled>
  );
};

export default MyGoal;
