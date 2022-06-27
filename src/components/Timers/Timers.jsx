import { Header, Wrapper } from './Timers.styled';
import { useSelector } from 'react-redux';

import Timer from './Timer';
const Timers = () => {
    const isStarted = useSelector(state => state.training.isStarted);
    const endDate = useSelector(state => state.training.endDate);
    const totalPages = useSelector(state => state.training.totalPages);
    const readedPages = useSelector(state => state.training.readedPages);
    const pagesLeft = totalPages - readedPages;
    const year = (new Date().getFullYear()) + 1;
    return (
        <Wrapper>
            <div>
                <Header>До закінчення року залишилось</Header>
                <Timer targetDate={`01/01/${year}`} />
            </div>
            <div>
                <Header>До досягнення мети залишилось</Header>
                <Timer targetDate={isStarted && pagesLeft !==0 ? endDate : new Date()} action={isStarted && pagesLeft !==0 ? 1 : 0} />
            </div>
        </Wrapper>
    )
};

export default Timers;