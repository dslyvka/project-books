
import MyGoalStyled from "./MyGoal.styled"

const MyGoal = () => {

    return (
        <MyGoalStyled>
            <h2 className="bookTitle">Моя мета прочитати</h2>
            <div className="booksCounterContainer">
                <div className="booksCounter"><p className="counterNumber">2</p></div>
        
                <div className="booksCounter">
                    <p className="counterNumber">25</p>
                </div>
               
                <div className="counterLabelContainer">
                    <p className="counterLabel">Кількість книжок</p>
                    <p className="counterLabel">Кількість днів</p>                 
                </div>
            </div>
        </MyGoalStyled>
    );
}

export default MyGoal