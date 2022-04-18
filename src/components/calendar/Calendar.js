import { CalendarContainer, MonthYearContainer, YearContainer, MonthContainer, Table, Arrow, Row } from "../../styles/calendarStyles/CalendarStyles";
import DayOfWeek from "./DayOfWeek";
import DateCell from "./DateCell";
import moment from "moment";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Calendar = () => {

  const [today, setToday] = useState(moment());
  
  //Generate Weeks & Days Information of TargetMonth
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  let week = firstWeek;
  let dates = [];
  for (week; week <= lastWeek; week++) {
    let date = Array(7).fill(0).map((element, index) => {
      let day = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
      return {
        date: day.format('YYYY MM DD'),
        week: week,
        month: day.format('MM'),
        day: day.format('D')
      }
    })
    dates.push(date);
  } 

  //Change Target Month
  const prevMonth = () => setToday(today.clone().subtract(1, 'month'));
  const nextMonth = () => setToday(today.clone().add(1, 'month'));

  return (
    <CalendarContainer>
      <MonthYearContainer>
        <YearContainer>{today.format('YYYY')}</YearContainer>
        <MonthContainer>
          <Arrow><FaAngleLeft size={'40'} onClick={prevMonth}/></Arrow>
          {today.format('MM')}
          <Arrow><FaAngleRight size={'40'} onClick={nextMonth}/></Arrow>
        </MonthContainer>
      </MonthYearContainer>
      <Table>
        <DayOfWeek />
        {dates.map((week, index) => {
          return (
            <Row key={index+100}>
              {week.map((day) => {
                let isThisMonth = true;
                let isToday = false;
                if (day.date === moment().format('YYYY MM DD')) isToday = true;
                if (day.month !== today.format('MM')) isThisMonth = false;
                return (
                <DateCell key={day.day} day={day.day} isThisMonth={isThisMonth} isToday={isToday}/>
                )}
              )}
            </Row>
          )}
        )}
      </Table>
    </CalendarContainer>
  )
}

export default Calendar;