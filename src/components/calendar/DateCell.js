import { DateCellContainer } from "../../styles/calendarStyles/DateCellStyles";

const DateCell = ({ day, isThisMonth, isToday }) => {

  return (
    <DateCellContainer isThisMonth={isThisMonth} isToday={isToday}>
      {day}
    </DateCellContainer>
  )
}

export default DateCell;