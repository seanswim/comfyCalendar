import { CalendarContainer, MonthYearContainer, YearContainer, MonthContainer, Table, Arrow } from "../../styles/calendarStyles/CalendarStyles";
import DayRow from "./DayRow";
import DateCell from "./Date";
import moment from "moment";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Calendar = () => {

  const [today, setToday] = useState(moment());

  return (
    <CalendarContainer>
      <MonthYearContainer>
        <YearContainer>
          {today.format('YYYY')}
        </YearContainer>
        <MonthContainer>
          <Arrow><FaAngleLeft size={'40'} /></Arrow>
          {today.format('MM')}
          <Arrow><FaAngleRight size={'40'} /></Arrow>
        </MonthContainer>
      </MonthYearContainer>
      <Table>
        <DayRow />
        <DateCell></DateCell>
      </Table>
    </CalendarContainer>
  )
}

export default Calendar;