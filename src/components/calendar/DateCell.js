import { DateCellContainer } from "../../styles/calendarStyles/DateCellStyles";

const DateCell = ({ day }) => {
  return (
    <DateCellContainer>
      {day}
    </DateCellContainer>
  )
}

export default DateCell;