import MyGoalStyled from './MyGoal.styled';
import { useSelector } from 'react-redux';
import getCurrTraining from '../../redux/training/trainingActions';

// console.log(trainingSelectors);

const MyGoal = ({ startTraining }) => {
  const isTraining = useSelector(state => state.training.isStarted);
    const books = useSelector(state => state.training.books)
    const wasRead = useSelector (state => state.training.readedPages)
  let readBook = 0;
  let leftToRead;
  for (let i = 0; i < books.length; i++) {
    if (books[i].pages <= wasRead) {
      readBook += 1;
    }
    leftToRead = books.length - readBook;
  }

  return (
    <MyGoalStyled className="myGoalStyled" startTraining={startTraining}>
      <div className="statistic-title">
        <p>Моя мета прочитати</p>
      </div>
      <div className="statistic">
        <div className="statistic-book">
          <div className="statistic__cell">
            <span className="statistic__number">
              {books.length}
            </span>
          </div>
          <p className="statistic__text">
            Кількість <span> книжок</span>{' '}
          </p>
        </div>
        <div className="statistic-day">
          <div className="statistic__cell">
            <span className="statistic__number">{isTraining.duration}</span>
          </div>
          <p className="statistic__text">
            Кількість <span> днів</span>
          </p>
        </div>
        {startTraining && (
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
