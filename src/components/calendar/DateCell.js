import { DateCellContainer } from "../../styles/calendarStyles/DateCellStyles";
import { setTargetDate } from "../../redux/Slice";
import { useDispatch } from "react-redux";

const DateCell = ({ day, date, isThisMonth, isToday, isTarget }) => {

  const dispatch = useDispatch();
  const handleTargetDate = () => {
    dispatch(setTargetDate(date.date))
  }

  return (
    <DateCellContainer isThisMonth={isThisMonth} isToday={isToday} isTarget={isTarget} onClick={handleTargetDate}>
      {day}
    </DateCellContainer>
  )
}

export default DateCell;