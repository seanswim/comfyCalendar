import { DateCellContainer, ToDoContainer } from "../../styles/calendarStyles/DateCellStyles";
import { setTargetDate } from "../../redux/Slice";
import { useSelector, useDispatch } from "react-redux";

const DateCell = ({ day, date, isThisMonth, isToday, isTarget }) => {

  const states = useSelector((state) => state.reducer.states);
  const dispatch = useDispatch();
  const handleTargetDate = () => {
    dispatch(setTargetDate(date.date))
  }

  let todoList = [];
  states.plans.filter((item) => {
    const targetDateForm = new Date (date.date.replaceAll(' ','-')).getTime()/1000;
    if (item.startDate.seconds <= targetDateForm && targetDateForm <= item.endDate.seconds) {
      todoList.push(item);
    }
  })

  return (
    <DateCellContainer isThisMonth={isThisMonth} isToday={isToday} isTarget={isTarget} onClick={isThisMonth ? handleTargetDate : null}>
      {day}
      {todoList.map((item, index) => <ToDoContainer key={index}>{item.description}</ToDoContainer>)}
    </DateCellContainer>
  )
}

export default DateCell;