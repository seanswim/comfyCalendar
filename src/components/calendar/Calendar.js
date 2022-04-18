import { CalendarContainer, MonthYearContainer, YearContainer, MonthContainer, Table, Arrow, Row } from "../../styles/calendarStyles/CalendarStyles";
import DayOfWeek from "./DayOfWeek";
import DateCell from "./DateCell";
import moment from "moment";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Calendar = () => {

  const [targetDate, setTargetDate] = useState(moment());
  
  //Generate Weeks & Days Information of TargetMonth
  const firstWeek = targetDate.clone().startOf('month').week();
  const lastWeek = targetDate.clone().endOf('month').week() === 1 ? 53 : targetDate.clone().endOf('month').week();
  let week = firstWeek;
  let dates = [];
  for (week; week <= lastWeek; week++) {
    let date = Array(7).fill(0).map((element, index) => {
      let day = targetDate.clone().startOf('year').week(week).startOf('week').add(index, 'day');
      return {
        week: week,
        day: day.format('D')
      }
    })
    dates.push(date);
  } 

  //Change Target Month
  const prevMonth = () => setTargetDate(targetDate.clone().subtract(1, 'month'));
  const nextMonth = () => setTargetDate(targetDate.clone().add(1, 'month'));

  return (
    <CalendarContainer>
      <MonthYearContainer>
        <YearContainer>{targetDate.format('YYYY')}</YearContainer>
        <MonthContainer>
          <Arrow><FaAngleLeft size={'40'} onClick={prevMonth}/></Arrow>
          {targetDate.format('MM')}
          <Arrow><FaAngleRight size={'40'} onClick={nextMonth}/></Arrow>
        </MonthContainer>
      </MonthYearContainer>
      <Table>
        <DayOfWeek />
        {dates.map((week, index) => {
          return (
            <Row key={index+100}>
              {week.map((day) => <DateCell key={day.day} day={day.day} />)}
            </Row>
          )}
        )}
      </Table>
    </CalendarContainer>
  )
}

export default Calendar;