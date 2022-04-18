import { DayOfWeekContainer, DayOfWeekWrapper } from "../../styles/calendarStyles/DayOfWeekStyles";

const DayOfWeek = () => {
  return (
    <DayOfWeekContainer>
      <DayOfWeekWrapper color={'red'}>Sun</DayOfWeekWrapper>
      <DayOfWeekWrapper>Mon</DayOfWeekWrapper>
      <DayOfWeekWrapper>Tue</DayOfWeekWrapper>
      <DayOfWeekWrapper>Wed</DayOfWeekWrapper>
      <DayOfWeekWrapper>Thu</DayOfWeekWrapper>
      <DayOfWeekWrapper>Fri</DayOfWeekWrapper>
      <DayOfWeekWrapper color={'red'}>Sat</DayOfWeekWrapper>
    </DayOfWeekContainer>
  )
}

export default DayOfWeek;