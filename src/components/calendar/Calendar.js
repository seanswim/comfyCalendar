import { CalendarContainer, MonthYearContainer, YearContainer, MonthContainer, Table, Arrow, Row } from "../../styles/calendarStyles/CalendarStyles";
import DayOfWeek from "./DayOfWeek";
import DateCell from "./DateCell";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { doc, getDoc, getDocs, collection, query, where } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { setPlans } from "../../redux/Slice";
import { setTargetDate } from "../../redux/Slice";

const Calendar = () => {

  const [today, setToday] = useState(moment());
  const states = useSelector((state) => state.reducer.states);
  const dispatch = useDispatch();
  
  //Make a list of dates in order to render to Calendar component
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
  const prevMonth = async () => {
    dispatch(setTargetDate(today.clone().subtract(1, 'month').format('YYYY MM DD')));
    setToday(today.clone().subtract(1, 'month'));    
  };
  const nextMonth = async () => {
    dispatch(setTargetDate(today.clone().add(1, 'month').format('YYYY MM DD')));
    setToday(today.clone().add(1, 'month'));
  };

  //Fetch plans data from db and filter out target month data 
  const getData = async() => {
    try{
      const collectionRef = collection(db, `users/${states.user.id}/plans`);
      const targetDateForm = new Date(states.targetDate.replaceAll(' ','-').slice(0,-3)).getTime()/1000;
      let plans = [];
      const docsSnap = await getDocs(collectionRef);
      docsSnap.forEach((doc) => {
        if (doc.data().startMonth.seconds <= targetDateForm && targetDateForm <= doc.data().endMonth.seconds) {
          plans.push(doc.data());
        }
      });        
      dispatch(setPlans(plans));
    } catch(error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (states.signin) getData();
  }, [states.signin, states.user, states.targetDate])

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
                let isTarget = false;
                if (day.date === moment().format('YYYY MM DD')) isToday = true;
                if (day.month !== today.format('MM')) isThisMonth = false;
                if (day.date === states.targetDate) isTarget = true;
                return (
                <DateCell key={day.day} day={day.day} date={day} isThisMonth={isThisMonth} isToday={isToday} isTarget={isTarget}/>
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